const letterCode = {
    a: 1, b: 2, c: 3, d: 4, e: 5, f: 6,
    g: 7, h: 8, i: 9, j: 1, k: 2, l: 3,
    m: 4, n: 5, o: 6, p: 7, q: 8, r: 9,
    s: 1, t: 2, u: 3, v: 4, w: 5, x: 6,
    y: 7, z: 8,
}

function processName(first,middle,last) {
    const fullName = fullName.concat(first," ",middle," ",last)
    const vowels = fullName.replace(/[^aeiouy]/ig, "");
    const consonants = fullName.replace(/[^bcdfghjklmnpqrstvwxyz]/ig, "");

    const output = {
        motivation: getMotivation(vowels),
        innerSelf: getInnerSelf(consonants),
        expression: getExpression(fullName),
        karmicLessons: getKarmicHiddenSubconscious(fullName).karmicLessons,
        hiddenTendencies: getKarmicHiddenSubconscious(fullName).hiddenTendencies,
        subconciousResponse: getKarmicHiddenSubconscious(fullName).subconciousResponse
    }

    return output
}

function getMotivation(vowels) {
    let total = 0
    for(let i = 0; i < vowels.length; i++) {
        total += (letterCode[vowels[i].toLowerCase()])
    }

    if (total <= 9 || total === 11 || total === 22) {
        return total
    }

    else {
        return reduceNum(total)
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
        return reduceNum(total)
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
        return reduceNum(total)
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



function splitDob(dob) {
    return dob.split('-')
}

function getDestinyNumber(dob) {
    let sumDob = 0
    let dobArr = splitDob(dob)

    dobArr.forEach(n => {
        sumDob += parseInt(n)
    })

    return reduceNum(sumDob)
}

function getFirstLifeCycle(dob) {
    let firstCycle = []
    let firstCycleLength = 0
    let dobArr = splitDob(dob)
    let destinyNum = getDestinyNumber(dob)

    firstCycleLength = (36 - destinyNum) + 1

    let firstCycleEnd = parseInt(dobArr[0]) + firstCycleLength

    firstCycle.push(parseInt(dobArr[1]), parseInt(dobArr[0]), firstCycleEnd)

    return firstCycle
}

function getSecondLifeCycle(dob) {
    let secondCycle = []
    let dobArr = splitDob(dob)
    let firstCycleEnd = getFirstLifeCycle(dob)[2]

    let secondCycleEnd = (firstCycleEnd + 27)

    secondCycle.push(parseInt(dobArr[2]), firstCycleEnd, secondCycleEnd)

    return secondCycle
}

function getThirdLifeCycle(dob) {
    let thirdCycle = []
    let dobArr = splitDob(dob)
    let thirdCycleNumber = reduceNum(dobArr[0])
    let secondCycleEnd = getSecondLifeCycle(dob)[2]

    thirdCycle.push(thirdCycleNumber, secondCycleEnd)

    return thirdCycle
}

function getLifeCycles(dob) {
    const lifeCycles = {
        firstLifeCycle: getFirstLifeCycle(dob),
        secondLifeCycle: getSecondLifeCycle(dob),
        thirdLifeCycle: getThirdLifeCycle(dob)
    }

    return lifeCycles
}

function getFirstTurningPoint(dob) {
    let firstTurningPoint = []
    let firstTurningPointNumber = reduceNum(parseInt(splitDob(dob)[1]) + parseInt(splitDob(dob)[2]))
  
    firstTurningPoint.push(firstTurningPointNumber)
  
    let firstLifeCycle = getFirstLifeCycle(dob).map((n, i) => {
      if (i > 0) {
        firstTurningPoint.push(n)
      }
    })
  
    return firstTurningPoint
    
  }
  
function getSecondTurningPoint(dob) {
    let secondTurningPoint = []
    let secondTurningPointNumber = reduceNum(parseInt(splitDob(dob)[2]) + parseInt(splitDob(dob)[0]))

    secondTurningPoint.push(secondTurningPointNumber, getFirstLifeCycle(dob)[2], getFirstLifeCycle(dob)[2] + 9)

    return secondTurningPoint
}

function getThirdTurningPoint(dob) {
    let thirdTurningPoint = []
    let thirdTurningPointNumber = reduceNum(getFirstTurningPoint(dob)[0] + getSecondTurningPoint(dob)[0])

    thirdTurningPoint.push(thirdTurningPointNumber, getSecondTurningPoint(dob)[2], getSecondTurningPoint(dob)[2] + 9)

    return thirdTurningPoint
}

function getFourthTurningPoint(dob) {
    let fourthTurningPoint = []
    let fourthTurningPointNumber = reduceNum(parseInt(splitDob(dob)[1]) + parseInt(splitDob(dob)[0]))

    fourthTurningPoint.push(fourthTurningPointNumber, getThirdTurningPoint(dob)[2])

    return fourthTurningPoint
}

function getTurningPoints(dob) {
    let turningPoints = []
    turningPoints.push(
        getFirstTurningPoint(dob),
        getSecondTurningPoint(dob),
        getThirdTurningPoint(dob),
        getFourthTurningPoint(dob)
    )

    return turningPoints
}

function getfirstMinorChallenge(dob) {
    let month = parseInt(splitDob(dob)[1])
    let day = parseInt(splitDob(dob)[2])

    if (day === month) {
        return 0
    } else {
        if (day > month) {
            return day - month
        } else {
            return month - day
        }
    }
}

function getsecondMinorChallenge(dob) {
    let day = parseInt(splitDob(dob)[2])
    let yearReduced = reduceNum(parseInt(splitDob(dob)[0]))

    if (day === yearReduced) {
        return 0
    } else {
        if (day > yearReduced) {
            return day - yearReduced
        } else {
            return yearReduced - day
        }
    }
}

function getMajorChallenge(dob) {
    let minor1 = getfirstMinorChallenge(dob)
    let minor2 = getsecondMinorChallenge(dob)

    if (minor1 === minor2) {
        return 0
    } else {
        if (minor1 > minor2) {
            return minor1 - minor2
        } else {
            return minor2 - minor1
        }
    }
}

function getChallenges(dob) {
    let challenges = []
        challenges.push(
        getfirstMinorChallenge(dob),
        getsecondMinorChallenge(dob),
        getMajorChallenge(dob)
    )

    return challenges

}

module.exports = {
    processName,
    getLifeCycles,
    getTurningPoints,
    getChallenges
}