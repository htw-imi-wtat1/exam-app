const {  id } = require('../../commonJest')
module.exports = {

    generateUserData: (name) => {
        return {
            first: name,
            last: 'UserData',
            email: `userData_${id()}@somemail.com`,
            password: 'geheim123'
        }
    },
    generateUserDataFlat:(name) => {
        return {
            first: 'Dos',
            last: 'UserDataFlat',
            email: `userdataflat${id()}@gmail.com`,
            password: 'geheim123'
        }

    },
    generateUserDataNested: (name) => {
        return {
            name: {
                first: 'Tres',
                last: 'UserDataNested'
            },
            email: `userdatanested${id()}@gmail.com`,
            password: 'geheim123'
        }
    }
}