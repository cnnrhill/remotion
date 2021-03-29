import execa from "execa";
import fs from "fs";
import os from "os";
import path from "path";
// import jimp from "jimp";
import sharp from "sharp";

import {selectColor} from "../packages/example/src/Framer";

test('should render correct frames from embedded videos', async () => {
    const outputPath = await fs.promises.mkdtemp(
        path.join(os.tmpdir(), 'remotion-')
    );

    await execa(
        "npx",
        [
            "remotion",
            "render",
            "src/index.tsx",
            "video-testing",
            outputPath,
            "--image-format",
            "jpeg",
            "--quality",
            "100",
            "--sequence",
        ],
        {
            cwd: "packages/example",
            reject: false,
        }
    );

    let missedFrames = 0;

    for (let frame = 0; frame < 100; frame++) {
        // each frame of the embedded video contains a (deterministically) random color -
        // see Framer composition under @remotion/examples
        const expectedColor = {
            red: selectColor('red', frame),
            green: selectColor('green', frame),
            blue: selectColor('blue', frame),
        };

        // load the frame jpeg generated by remotion
        const paddedIndex = String(frame).padStart(2, '0');
        const filename = path.join(outputPath, `element-${paddedIndex}.jpeg`);
        const img = await sharp(filename).raw().toBuffer();

        // extract the RGB color value at 5x5
        // const actualColor = jimp.intToRGBA(img.getPixelColor(5, 5));
        const actualColor = {
            red: img.readUInt8(0),
            green: img.readUInt8(1),
            blue: img.readUInt8(2),
        };

        const colorDistance = {
            red: Math.abs(expectedColor.red - actualColor.red),
            green: Math.abs(expectedColor.green - actualColor.green),
            blue: Math.abs(expectedColor.blue - actualColor.blue),
        };

        console.log(actualColor, colorDistance);

        // jpeg encoding sometimes shifts the color very slightly - so measure the distance
        // between the expected and actual colors and consider any frame not within the
        // acceptable range to be wrong
        if (colorDistance.red > 5 || colorDistance.green > 5 || colorDistance.blue > 5) {
            missedFrames++;
        }
    }

    expect(missedFrames).toBe(0);
});