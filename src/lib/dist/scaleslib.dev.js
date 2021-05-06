"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.instruments = exports.tuning = exports.scales = exports.tones = void 0;
// the 12 tones
var tones = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"]; // scaleslib

exports.tones = tones;
var W = 2;
var H = 1;
var major = ["Major", [W, W, H, W, W, W, H], ["I Major", "II Minor", "III Minor", "IV Major", "V Major", "VI Minor", "VII ø"]];
var bebopdom = ["Bebop Dominant", [W, W, H, W, W, H, H, H], ["I Major", "II Minor", "III Minor", "IV Major", "V Major", "VI Minor", "VII♭ Major", "VII ø"]];
var minor = ["Natural Minor", [W, H, W, W, H, W, W], ["I Minor", "II ø", "III Major", "IV Minor", "V Minor", "VI Major", "VII Major"]];
var harmonicminor = ["Harmonic Minor", [W, H, W, W, H, W + H, W], ["I Minor", "II ° or ø", "III Augmented", "IV Minor", "V Major", "VI Major", "VII ° or ø"]];
var scales = [major, bebopdom, minor, harmonicminor]; // tunings
// stndrd tuning

exports.scales = scales;
var stndrd = ['Standard', [4, 11, 7, 2, 9, 4]];
var dropd = ['Drop D', [4, 11, 7, 2, 9, 2]];
var tuning = [stndrd, dropd]; // instruments

exports.tuning = tuning;
var guitar = ['Guitar', 6];
var bass = ['Bass', 4];
var bass5 = ['5-String Bass', 5];
var instruments = [guitar, bass, bass5];
exports.instruments = instruments;