//const xss = require('xss')
//const Treeize = require('treeize')

const numDataService = {
    getMotivation(db, uid) {
        return db
            .from('users AS u')
            .select(
                'u.id', 
                'u.username', 
                'mu.motivation_number', 
                'm.motivation_content',
            )
            .leftJoin(
                'motivation_users AS mu',
                'mu.user_id',
                'u.id',
            )
            .leftJoin(
                'motivation AS m',
                'm.motivation_numer',
                'mu.motivation_number'
            )
            .where('u.username', uid)
    }
}

module.exports = {
    numDataService
}
