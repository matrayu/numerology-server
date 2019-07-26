const xss = require('xss')
const bcrypt = require('bcryptjs')
//const UserHelpers = require('./users-helpers')

const REGEX_UPPER_LOWER_NUMBER_SPECIAL = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&])[\S]+/

const UserService = {
    hasUserWithUserName(db, username) {
        return db('users')
            .where({ username })
            .first()
            .then(user => !!user)
    },

    insertUser(db, newUser, userData) {
        let userId;
        let finalUser;
        db
            .insert(newUser)
            .into('users')
            .returning('*')
            .then(([user]) => user)
            .then(user => {
                userId = user.id;
                finalUser = user;
                finalUser.data = userData;
                return this.insertMotivation(db, user.id, userData.motivation)
            })
            .then(res => {
                console.log('~~~~~done inserting Motivation');
                return this.insertInnerSelf(db, userId, userData.innerSelf)
            })
            .then(res => {
                console.log(userId, finalUser)
            })
        return finalUser;
    },

    insertMotivation(db, uid, moid) {
        return db
            .insert({ 
                'user_id': uid, 
                'motivation_number': moid 
            })
            .into('motivation_users');
    },

    insertInnerSelf(db, uid, innerSelfId) {
        return db
            .insert({ 
                'user_id': uid, 
                'inner_self_number': innerSelfId 
            })
            .into('inner_self_users')
    },

    insertUserData(db, userData) {
        return db
            .insert(userData.motivation)
    },

    validatePassword(password) {
        if (password.length < 8) {
            return 'Password must be longer than 8 characters'
        }
        if (password.length > 72) {
            return 'Password must be less than 72 characters'
        }

        if (password.startsWith(' ') || password.endsWith(' ')) {
            return 'Password must not start or end with empty spaces'
        }

        if (!REGEX_UPPER_LOWER_NUMBER_SPECIAL.test(password))
            return 'Password must contain 1 upper case, lower case, number and special character'
    },

    hashPassword(password) {
        return bcrypt.hash(password, 12)
    },

    serializeUser(user) {
        return {
            id: user.id,
            first_name: xss(user.first_name),
            middle_name: xss(user.middle_name),
            last_name: xss(user.last_name),
            username: xss(user.username),
            dob: user.dob,
            date_created: new Date(user.date_created)
        }
    },

}

module.exports = UserService