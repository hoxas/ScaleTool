// scaleMachine
function buildScale (scale, tone) {
    // error missing args
    if (scale == null || tone == null) {
        return 'buildScale Error, missing scale and/or tone as args'
    } 

    // Init array and save first tone pos.
    let buildScale = new Array();
    let tone0 = tone;

    for (i = 0; i < scale[1].length; i++) {
        if (tone <= 11) {
            buildScale.push([tones[tone], scale[2][i]])
            //console.log(tones[tone], tone)
            tone = tone + scale[1][i];
        } else if (tone > 11) {
            tone = tone - 12;
            buildScale.push([tones[tone], scale[2][i]])
            //console.log(tones[tone], tone)
            tone = tone + scale[1][i];
        }
    }

    // scale output
    //console.log(`${tones[tone0]} ${scale[0]} Scale`)
    //console.table(buildScale)

    builtScale = [`${tones[tone0]} ${scale[0]} Scale`, buildScale]

    return builtScale;
}