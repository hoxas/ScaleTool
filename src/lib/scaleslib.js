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
        "I Major",
        "II Minor",
        "III Minor",
        "IV Major",
        "V Major",
        "VI Minor",
        "VII ø",
    ],
];
const bebopdom = [
    "Bebop Dominant",
    [W, W, H, W, W, H, H, H],
    [
        "I Major",
        "II Minor",
        "III Minor",
        "IV Major",
        "V Major",
        "VI Minor",
        "VII♭ Major",
        "VII ø",
    ]
];
const minor = [
    "Natural Minor",
    [W, H, W, W, H, W, W],
    [
        "I Minor",
        "II ø",
        "III Major",
        "IV Minor",
        "V Minor",
        "VI Major",
        "VII Major",
    ]
];
const harmonicminor = [
    "Harmonic Minor",
    [W, H, W, W, H, W + H, W],
    [
        "I Minor",
        "II ° or ø",
        "III Augmented",
        "IV Minor",
        "V Major",
        "VI Major",
        "VII ° or ø",
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