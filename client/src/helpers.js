const letterCode = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 1,
    k: 2,
    l: 3,
    m: 4,
    n: 5,
    o: 6,
    p: 7,
    q: 8,
    r: 9,
    s: 1,
    t: 2,
    u: 3,
    v: 4,
    w: 5,
    x: 6,
    y: 7,
    z: 8,
} 
//const name = 'Frank William Vilen'
//const vowels = name.replace(/[^aeiouy]/ig, "")
//const consonants = name.replace(/[^bcdfghjklmnpqrstvwxyz]/ig, "")

function getMotivation(vowels) {
    let total = 0
    for(let i = 0; i < vowels.length; i++) {
        total += (letterCode[vowels[i].toLowerCase()])
    }

    if (total <= 9 || total === 11 || total === 22) {
        return total
    }

    else {
        return { motivation: reduceNum(total) }
    }
}

function getInnerSelf(consonants) {
    let total = 0
    for(let i = 0; i < consonants.length; i++) {
        total += letterCode[consonants[i].toLowerCase()]
    }

    if (total <= 9 || total === 11 || total === 22) {
        return total
    }

    else {
        return { innerSelf: reduceNum(total) }
    }
}

function getExpression(allLetters) {
    let name = allLetters.replace(/ /g,'').toLowerCase()
    let total = 0
    for(let i = 0; i < name.length; i++) {
        total += letterCode[name[i]]
    }

    if (total <= 9 || total === 11 || total === 22) {
        return total
    }

    else {
        return { expression: reduceNum(total) }
    }
}

function getKarmicHiddenSubconscious(allLetters) {
    let name = allLetters.replace(/ /g,'').toLowerCase()
    let karmicLessons = []
    let hiddenTendencies = []
    let numObject = {
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
        6: 0,
        7: 0,
        8: 0,
        9: 0
    }

    for(let i = 0; i < name.length; i++) {
        numObject[letterCode[name[i]]]++
    }

    for (let prop in numObject) {
        if (numObject[prop] === 4) {
        karmicLessons.push(prop)
        }
    }

    for (let prop in numObject) {
        if (numObject[prop] >= 4) {
        hiddenTendencies.push(prop)
        }
    }

    return { 
        karmicLessons: karmicLessons,
        hiddenTendencies: hiddenTendencies,
        subconciousResponse: karmicLessons.length
    }
}

function reduceNum(n) {
    let output = []
    let sNum = n.toString()
    let reduced = n
    let sum = 0

    while (reduced > 9 && reduced !== 11 && reduced !== 22) {
        for (let i = 0; i < sNum.length; i++) {
            output.push(+sNum.charAt(i))
        }
        for (let i = 0; i < output.length; i++) {
            sum += parseInt(output[i])
        }
        reduced = sum
        sum = 0
        output = []
        sNum = reduced.toString()
    }

    return reduced
}

function processName(name) {
    const vowels = name.replace(/[^aeiouy]/ig, "");
    const consonants = name.replace(/[^bcdfghjklmnpqrstvwxyz]/ig, "");

    const output = {
        motivation: getMotivation(vowels),
        innerSelf: getInnerSelf(consonants),
        expression: getExpression(name),
        karmicLessons: getKarmicHiddenSubconscious(name).karmicLessons,
        hiddenTendencies: getKarmicHiddenSubconscious(name).hiddenTendencies,
        subconciousResponse: getKarmicHiddenSubconscious(name).subconciousResponse
    }

    return output
}

module.exports = {
    processName
}