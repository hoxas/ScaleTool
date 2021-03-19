//implementing carousel below

function writeScale(builtScale) {
    document.getElementById('scale_name').innerHTML = builtScale[0];
    scale_degree = document.getElementById('scale_degree');
    scale_notes = document.getElementById('scale_notes');
    

    //reset notes
    scale_degree.innerHTML = '';
    scale_notes.innerHTML = '';

    for (x = 0; x < builtScale[1].length; x++) {
        new_td = document.createElement('td');
        new_td.innerHTML = `${builtScale[1][x][1]} `;
        scale_degree.appendChild(new_td)
        new_td2 = document.createElement('td');
        new_td2.innerHTML = `${builtScale[1][x][0]} `;
        scale_notes.appendChild(new_td2)

        

    
    }

}


//
//
//
//
//

let curTone = '';
let curScale = '';

function changeTone(tone) {
    // why isnt this working? css not updating? 
    // when i dont use changetone() it loads default class as usual :/
    var elems = document.querySelector('.active');
    console.log(elems)
    elems.removeAttribute('class')
    console.log(elems)
    elem2 = document.getElementById(`${tones[tone]}`);
    elem2.setAttribute('class', 'active')
    console.log(elem2)
    return curTone = tone;
}

function changeScale(scale) { 
    document.getElementById('curScale').innerHTML = `Scale: ${scale[0]}`;
    return curScale = scale;
}

//default values

changeTone(0)
changeScale(major)

// run

writeScale(buildScale(curScale, curTone));

