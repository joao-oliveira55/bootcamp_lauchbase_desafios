const class1 = [
    {
        name: 'Joao',
        grade: 10
    },
    {
        name: 'Ana',
        grade: 10
    },
    {
        name: 'Diego',
        grade: 10
    },
    {
        name: 'Rafael',
        grade: 0
    }
]

const class2 = [
    {
        name: 'Joao',
        grade: 8
    },
    {
        name: 'Ana',
        grade: 8
    },
    {
        name: 'Diego',
        grade: 8
    },
    {
        name: 'Patrick',
        grade: 10
    }
]

function calculateAverage(studants) {
    sum = 0

    for (let i = 0; i < studants.length; i++) {
        sum = sum + studants[i].grade
    }

    return sum / studants.length
}

function message(average, classMessage ) {
    if (average > 5) {
        console.log(`${classMessage} average: ${average}. Congratulation`)
    } else {
        console.log(`${classMessage} avarege: ${average}. is not good.`)
    }
}

function markAsFlunked(studant) {
    studant.flunked = false

    if (studant.grade < 5) {
        studant.flunked = true
    }
}

function sendMessageFlunked(studant) {
    if (studant.flunked) {
        console.log(`the studant ${studant.name} foi flunked`)
    }
}

function studantsReprovados(studants) {
    for (let studant of studants) {
        markAsFlunked(studant)
        sendMessageFlunked(studant)
    }
}

const averageTurma1 = calculateAverage(class1)
const averageTurma2 = calculateAverage(class2)

message(averageTurma1, 'Class 1')
message(averageTurma2, 'Class 2')

studantsReprovados(class1)
studantsReprovados(class2)
