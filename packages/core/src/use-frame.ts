import {useTimelinePosition} from '@remotion/player';
import {useContext} from 'react';
import {SequenceContext} from './sequencing';

export const useAbsoluteCurrentFrame = (): number => {
	const timelinePosition = useTimelinePosition();

	return timelinePosition;
};

export const useCurrentFrame = (): number => {
	const frame = useAbsoluteCurrentFrame();
	const context = useContext(SequenceContext);

	const contextOffset = context ? context.from : 0;

	return frame - contextOffset;
};
