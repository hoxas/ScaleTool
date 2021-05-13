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
const W = 2;
const H = 1;

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
        "VII ø"
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
        "VII ø"
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
        "VII Major"
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
        "VII ° or ø"
    ]
];

export const scales = [major, bebopdom, minor, harmonicminor];

// tunings

// stndrd tuning
const stndrd = ['Standard', [4, 11, 7, 2, 9, 4]];
const dropd = ['Drop D', [4, 11, 7, 2, 9, 2]]

export const tuning = [stndrd, dropd]

// instruments

let guitar = ['Guitar', 6];
let bass = ['Bass', 4];
let bass5 = ['5-String Bass', 5]

export const instruments = [guitar, bass, bass5]

// interval formula in half steps

const [, m2, M2, m3, M3, P4, tt, P5, m6, M6, m7, M7, oct] = [...Array(13).keys()];

// chord formula

    // major
    const maj = ['', [M3, m3]]
    const maj6 = ['6', [M3, m3, M2]]
    const maj69 = ['6/9', [M3, m3, M2, P4]]
    const maj7 = ['7', [M3, m3, M3]]
    const maj9 = ['9', [M3, m3, M3, m3]]
    const maj11 = ['11', [M3, m3, M3, m3, m3]]
    const maj13 = ['13', [M3, m3, M3, m3, m3, M3]]

    // minor
    const min = ['m', [m3, M3]]
    const min6 = ['m6', [m3, M3, M2]]
    const min7 = ['m7', [m3, M3, m3]]
    const min9 = ['m9', [m3, M3, m3, M3]]
    const min11 = ['m11', [m3, M3, m3, M3, m3]]
    const min13 = ['m13', [m3, M3, m3, M3, m3, M3]]
    const minmaj7 = ['m maj7', [m3, M3, M3]]

    // dominant
    const dom7 = ['dom7', [M3, m3, m3]]
    const dom9 = ['dom9', [M3, m3, m3, M3]]
    const dom11 = ['dom11', [M3, m3, m3, M3, m3]]
    const dom13 = ['dom13', [M3, m3, m3, M3, m3, M3]]

    // diminished
    const dim = ['°', [m3, m3]]
    const dim7 = ['°7', [m3, m3, m3]]
    const halfdim = ['ø', [m3, m3, M3]]

    // augmented
    const aug = ['aug', [M3, M3]]
    const aug7 = ['aug7', [M3, M3, M2]]

    // suspended
    const sus2 = ['sus2', [M2, P4]]
    const sus4 = ['sus4', [P4, M2]]
    const sus47 = ['7sus4', [P4, M2, m3]]
    const add9 = ['add9', [M3, m3, P5]]
    const add11 = ['add11', [M3, m3, m7]]


const majorchords = [
    'Major',
    [
        maj, 
        maj6, 
        maj69, 
        maj7, 
        maj9, 
        maj11, 
        maj13
    ]
]

const minorchords = [
    'Minor',
    [
        min, 
        min6, 
        min7, 
        min9, 
        min11, 
        min13, 
        minmaj7
    ]
]

const dominantchords = [
    'Dominant',
    [
        dom7, 
        dom9, 
        dom11, 
        dom13  
    ]
]

const diminishedchords = [
    'Diminished',
    [
        dim, 
        dim7, 
        halfdim
    ]
]

const augmentedchords = [
    'Augmented',
    [
        aug, 
        aug7
    ]
]

const suspendedchords = [
    'Suspended',
    [
        sus2, 
        sus4, 
        sus47, 
        add9, 
        add11
    ]
]

export const chords = [
    majorchords, 
    minorchords, 
    dominantchords, 
    diminishedchords, 
    augmentedchords, 
    suspendedchords
]


/* export const chords = [
    maj, 
    maj6, 
    maj69, 
    maj7, 
    maj9, 
    maj11, 
    maj13, 
    min, 
    min6, 
    min7, 
    min9, 
    min11, 
    min13, 
    minmaj7, 
    dom7, 
    dom9, 
    dom11, 
    dom13, 
    dim, 
    dim7, 
    halfdim, 
    aug, 
    aug7, 
    sus2, 
    sus4, 
    sus47, 
    add9, 
    add11
] */