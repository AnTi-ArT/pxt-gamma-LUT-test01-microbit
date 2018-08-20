# pxt-gamma-lut-test01-microbit

### Gamma Correction 
A block package for the MakeCode/PXT editor for micro:bit and Calliope mini. 
...Also: A test project to figure out the github-makecode-workflow

## How to use:
- Import the github-url as Extension in makecode.calliope.cc or makecode.microbit.org
- Look into "LED" -> "More"
- Input takes your calculated value for the brighness. Or for single RGB channels.
- Output gives a gamma corrected value that you can send to the LED.
- "Gamma what?" - The eye does not percieve the linear values as "even". See, a LED with brightness "100" does not at all look half as bright as a "200" LED. Gamma correction simply scales down the values on a curve to make LEDs appear more "linear" to the eye. It also saves battery power. And your colors will look more colorfull, instead of just "white".
- Based on this [Article by Adafruit](https://learn.adafruit.com/led-tricks-gamma-correction?view=all). I changed the lookup table slightly to use Gamma 2.2 and to have fewer "0"s at the beginning

## TODO

- [ ] Add a reference for your blocks here
- [ ] Add "icon.png" image (300x200) in the root folder
- [x] Add "- beta" to the GitHub project description if you are still iterating it.
- [ ] Turn on your automated build on https://travis-ci.org
- [ ] Use "pxt bump" to create a tagged release on GitHub
- [ ] Get your package reviewed and approved https://makecode.microbit.org/packages/approval

Read more at https://makecode.microbit.org/packages/build-your-own

## License



## Supported targets

* for PXT/microbit
* for PXT/calliope

(The metadata above is needed for package search.)

