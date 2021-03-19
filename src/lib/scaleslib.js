// the 12 tones
export const tones = [
    "C",
    "C#",
    "D",
    "D#",
    "E",
    "F",
    "F#",
    "G",
    "G#",
    "A",
    "A#",
    "B",
];

// scaleslib
export const W = 2;
export const H = 1;

const major = [
    "Major",
    [W, W, H, W, W, W, H],
    [
        "1st Major",
        "2nd Minor",
        "3rd Minor",
        "4th Major",
        "5th Major",
        "6th Minor",
        "7th ø",
    ],
];
const bebopdom = [
    "Bebop Dominant",
    [W, W, H, W, W, H, H, H],
    [
        "1st Major",
        "2nd Minor",
        "3rd Minor",
        "4th Major",
        "5th Major",
        "6th Minor",
        "7♭th Major",
        "7th ø",
    ]
];
const minor = [
    "Natural Minor",
    [W, H, W, W, H, W, W],
    [
        "1st Minor",
        "2nd ø",
        "3rd Major",
        "4th Minor",
        "5th Minor",
        "6th Major",
        "7th Major",
    ]
];
const harmonicminor = [
    "Harmonic Minor",
    [W, H, W, W, H, W + H, W],
    [
        "1st Minor",
        "2nd ° or ø",
        "3rd Augmented",
        "4th Minor",
        "5th Major",
        "6th Major",
        "7th ° or ø",
    ]
];

export const scales = [major, bebopdom, minor, harmonicminor];

// tunings

// stndrd tuning
const stndrd = ['Standard', [4, 11, 7, 2, 9, 4]];

export const tuning = [stndrd]

// instruments

let guitar = ['Guitar'];
let bass = ['Bass'];

export const instruments = [guitar, bass]