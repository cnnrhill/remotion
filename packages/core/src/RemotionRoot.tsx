import {
	SetTimelineContext,
	SetTimelineContextValue,
	TimelineContext,
	TimelineContextValue,
} from '@remotion/player';
import React, {useCallback, useLayoutEffect, useMemo, useState} from 'react';
import {
	CompositionManager,
	CompositionManagerContext,
	TComposition,
	TSequence,
} from './CompositionManager';
import {continueRender, delayRender} from './ready-manager';

export const RemotionRoot: React.FC = ({children}) => {
	// Wontfix, expected to have
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const [compositions, setCompositions] = useState<TComposition<any>[]>([]);
	const [currentComposition, setCurrentComposition] = useState<string | null>(
		typeof window !== 'undefined' ? window.location.pathname.substr(1) : null
	);
	const [sequences, setSequences] = useState<TSequence[]>([]);
	const [frame, setFrame] = useState<number>(0);
	const [playing, setPlaying] = useState<boolean>(false);

	useLayoutEffect(() => {
		if (typeof window !== 'undefined') {
			window.remotion_setFrame = (f: number) => {
				const id = delayRender();
				setFrame(f);
				requestAnimationFrame(() => continueRender(id));
			};
		}
	}, []);

	const registerComposition = useCallback(<T,>(comp: TComposition<T>) => {
		setCompositions((comps) => {
			if (comps.find((c) => c.id === comp.id)) {
				throw new Error(
					`Multiple composition with id ${comp.id} are registered.`
				);
			}
			return [...comps, comp];
		});
	}, []);

	const registerSequence = useCallback((seq: TSequence) => {
		setSequences((seqs) => {
			return [...seqs, seq];
		});
	}, []);

	const unregisterComposition = useCallback((id: string) => {
		setCompositions((comps) => {
			return comps.filter((c) => c.id !== id);
		});
	}, []);

	const unregisterSequence = useCallback((seq: string) => {
		setSequences((seqs) => seqs.filter((s) => s.id !== seq));
	}, []);

	const contextValue = useMemo((): CompositionManagerContext => {
		return {
			compositions,
			registerComposition,
			unregisterComposition,
			currentComposition,
			setCurrentComposition,
			registerSequence,
			unregisterSequence,
			sequences,
		};
	}, [
		compositions,
		currentComposition,
		registerComposition,
		registerSequence,
		sequences,
		unregisterComposition,
		unregisterSequence,
	]);

	const timelineContextValue = useMemo((): TimelineContextValue => {
		return {
			frame,
			playing,
			shouldRegisterSequences: true,
		};
	}, [frame, playing]);

	const setTimelineContextValue = useMemo((): SetTimelineContextValue => {
		return {
			setFrame,
			setPlaying,
		};
	}, []);

	return (
		<TimelineContext.Provider value={timelineContextValue}>
			<SetTimelineContext.Provider value={setTimelineContextValue}>
				<CompositionManager.Provider value={contextValue}>
					{children}
				</CompositionManager.Provider>
			</SetTimelineContext.Provider>
		</TimelineContext.Provider>
	);
};
