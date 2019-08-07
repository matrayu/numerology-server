const motivation = {
    1: 'Mollit reprehenderit consectetur sint culpa ipsum voluptate voluptate',
    2: 'Consectetur magna culpa consectetur pariatur amet cupidatat',
    3: 'Anim amet enim culpa eu.',
    4: 'Officia irure duis ut veniam aliqua proident exercitation eiusmod qui sunt culpa.',
    5: 'Amet veniam excepteur nulla qui id cupidatat incididunt et fugiat duis proident qui.',
    6: 'Sit ea excepteur ea eiusmod sit tempor eiusmod ullamco cupidatat velit veniam reprehenderit laborum.',
    7: 'Sit laboris et duis deserunt minim dolor exercitation reprehenderit sunt aute.',
    8: 'Id aliqua voluptate enim duis officia.',
    9: 'Et ipsum excepteur incididunt fugiat dolor velit in ullamco eu.',
    11: 'Pariatur nisi et commodo mollit elit tempor proident velit dolor in reprehenderit.',
    22: 'Tempor pariatur sint magna et quis dolor ullamco.',
}

const innerSelf = {
    1: 'Mollit reprehenderit consectetur sint culpa ipsum voluptate voluptate',
    2: 'Consectetur magna culpa consectetur pariatur amet cupidatat',
    3: 'Anim amet enim culpa eu.',
    4: 'Officia irure duis ut veniam aliqua proident exercitation eiusmod qui sunt culpa.',
    5: 'Amet veniam excepteur nulla qui id cupidatat incididunt et fugiat duis proident qui.',
    6: 'Sit ea excepteur ea eiusmod sit tempor eiusmod ullamco cupidatat velit veniam reprehenderit laborum.',
    7: 'Sit laboris et duis deserunt minim dolor exercitation reprehenderit sunt aute.',
    8: 'Id aliqua voluptate enim duis officia.',
    9: 'Et ipsum excepteur incididunt fugiat dolor velit in ullamco eu.',
    11: 'Pariatur nisi et commodo mollit elit tempor proident velit dolor in reprehenderit.',
    22: 'Tempor pariatur sint magna et quis dolor ullamco.',
}

const expression = {
    1: 'Mollit reprehenderit consectetur sint culpa ipsum voluptate voluptate',
    2: 'Consectetur magna culpa consectetur pariatur amet cupidatat',
    3: 'Anim amet enim culpa eu.',
    4: 'Officia irure duis ut veniam aliqua proident exercitation eiusmod qui sunt culpa.',
    5: 'Amet veniam excepteur nulla qui id cupidatat incididunt et fugiat duis proident qui.',
    6: 'Sit ea excepteur ea eiusmod sit tempor eiusmod ullamco cupidatat velit veniam reprehenderit laborum.',
    7: 'Sit laboris et duis deserunt minim dolor exercitation reprehenderit sunt aute.',
    8: 'Id aliqua voluptate enim duis officia.',
    9: 'Et ipsum excepteur incididunt fugiat dolor velit in ullamco eu.',
    11: 'Pariatur nisi et commodo mollit elit tempor proident velit dolor in reprehenderit.',
    22: 'Tempor pariatur sint magna et quis dolor ullamco.',
}

const karmicLessons = {
    1: 'Mollit reprehenderit consectetur sint culpa ipsum voluptate voluptate',
    2: 'Consectetur magna culpa consectetur pariatur amet cupidatat',
    3: 'Anim amet enim culpa eu.',
    4: 'Officia irure duis ut veniam aliqua proident exercitation eiusmod qui sunt culpa.',
    5: 'Amet veniam excepteur nulla qui id cupidatat incididunt et fugiat duis proident qui.',
    6: 'Sit ea excepteur ea eiusmod sit tempor eiusmod ullamco cupidatat velit veniam reprehenderit laborum.',
    7: 'Sit laboris et duis deserunt minim dolor exercitation reprehenderit sunt aute.',
    8: 'Id aliqua voluptate enim duis officia.',
    9: 'Et ipsum excepteur incididunt fugiat dolor velit in ullamco eu.',
    11: 'Pariatur nisi et commodo mollit elit tempor proident velit dolor in reprehenderit.',
    22: 'Tempor pariatur sint magna et quis dolor ullamco.',
}

const hiddenTendencies = {
    1: 'Mollit reprehenderit consectetur sint culpa ipsum voluptate voluptate',
    2: 'Consectetur magna culpa consectetur pariatur amet cupidatat',
    3: 'Anim amet enim culpa eu.',
    4: 'Officia irure duis ut veniam aliqua proident exercitation eiusmod qui sunt culpa.',
    5: 'Amet veniam excepteur nulla qui id cupidatat incididunt et fugiat duis proident qui.',
    6: 'Sit ea excepteur ea eiusmod sit tempor eiusmod ullamco cupidatat velit veniam reprehenderit laborum.',
    7: 'Sit laboris et duis deserunt minim dolor exercitation reprehenderit sunt aute.',
    8: 'Id aliqua voluptate enim duis officia.',
    9: 'Et ipsum excepteur incididunt fugiat dolor velit in ullamco eu.',
    11: 'Pariatur nisi et commodo mollit elit tempor proident velit dolor in reprehenderit.',
    22: 'Tempor pariatur sint magna et quis dolor ullamco.',
}

const subconciousResponse = {
    1: 'Mollit reprehenderit consectetur sint culpa ipsum voluptate voluptate',
    2: 'Consectetur magna culpa consectetur pariatur amet cupidatat',
    3: 'Anim amet enim culpa eu.',
    4: 'Officia irure duis ut veniam aliqua proident exercitation eiusmod qui sunt culpa.',
    5: 'Amet veniam excepteur nulla qui id cupidatat incididunt et fugiat duis proident qui.',
    6: 'Sit ea excepteur ea eiusmod sit tempor eiusmod ullamco cupidatat velit veniam reprehenderit laborum.',
    7: 'Sit laboris et duis deserunt minim dolor exercitation reprehenderit sunt aute.',
    8: 'Id aliqua voluptate enim duis officia.',
    9: 'Et ipsum excepteur incididunt fugiat dolor velit in ullamco eu.',
    11: 'Pariatur nisi et commodo mollit elit tempor proident velit dolor in reprehenderit.',
    22: 'Tempor pariatur sint magna et quis dolor ullamco.',
}

const HelpersService = {
    getMotivation(num) {
        return(motivation[num])
    },

    getInnerSelf(num) {
        return(innerSelf[num])
    },

    getExpression(num) {
        return(expression[num])
    },

    getKarmicLessons(num) {
        return(karmicLessons[num])
    },

    getHiddenTendencies(num) {
        return(hiddenTendencies[num])
    },

    getSubconciousResponse(num) {
        return(subconciousResponse[num])
    },

}


export default HelpersService