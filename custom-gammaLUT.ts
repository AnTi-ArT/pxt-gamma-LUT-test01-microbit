/**
 * Nutze diese Datei für benutzerdefinierte Funktionen und Blöcke.
 * Weitere Informationen unter https://makecode.calliope.cc/blocks/custom
 * TEST for micro:bit since I'm not sure how to Calliope-Github for now
 */

/**
 * This Lookup Table is mainly based on https://learn.adafruit.com/led-tricks-gamma-correction?view=all
 * but recalculated with Gamma 2.2 and some "0"s replaced by "1"s
 */
const gammaLUT = [
    0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 3, 3,
    3, 3, 3, 4, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6,
    7, 7, 7, 8, 8, 8, 9, 9, 9, 10, 10, 10, 11, 11, 12, 12,
    12, 13, 13, 14, 14, 15, 15, 16, 16, 17, 17, 18, 18, 19, 19, 20,
    20, 21, 21, 22, 22, 23, 24, 24, 25, 25, 26, 27, 27, 28, 29, 29,
    30, 31, 31, 32, 33, 34, 34, 35, 36, 37, 37, 38, 39, 40, 40, 41,
    42, 43, 44, 45, 45, 46, 47, 48, 49, 50, 51, 52, 53, 53, 54, 55,
    56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 70, 71, 72,
    73, 74, 75, 76, 77, 78, 80, 81, 82, 83, 84, 86, 87, 88, 89, 91,
    92, 93, 94, 96, 97, 98, 99, 101, 102, 103, 105, 106, 108, 109, 110, 112,
    113, 115, 116, 117, 119, 120, 122, 123, 125, 126, 128, 129, 131, 132, 134, 135,
    137, 138, 140, 142, 143, 145, 146, 148, 150, 151, 153, 155, 156, 158, 160, 161,
    163, 165, 167, 168, 170, 172, 174, 175, 177, 179, 181, 183, 185, 186, 188, 190,
    192, 194, 196, 198, 200, 202, 204, 205, 207, 209, 211, 213, 215, 217, 219, 221,
    223, 226, 228, 230, 232, 234, 236, 238, 240, 242, 244, 247, 249, 251, 253, 255
];

/**
 * Benutzerdefinierte Blöcke
 */
// weight=100 color=#667711 icon="" (no need, goes into LED category)
namespace led {

    /**
     * Returns a brightness value with gamma correction applied. 
     * For a more even, "optical" LED appearance.
     * @param bright The "mathematical" brightness value from 0 to 255, eg: 255
     */
    //% weight=58
    //% blockId=gamma block="gamma correct|brightness %bright"
    //% parts="ledmatrix"
    //% bright.min=0 bright.max=255
    //% advanced=true
    export function gamma(bright: number): number {
        bright = Math.max(0, Math.min(255, bright));
        return gammaLUT[bright];
    }

}