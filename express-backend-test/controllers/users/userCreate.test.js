const { app, User, request, id } = require('../../commonJest')
const { generateUserData, generateUserDataFlat, generateUserDataNested } = require('./userData')
describe('user create', function () {
  let userData
  beforeEach(() => {
    userData = generateUserData('Uno')
  })

  it('post /users is 303', function (done) {
    request(app).post('/users').send(generateUserData('Uno 303')).expect(303).end(done)
  })

  it('post /users/create adds a user', async function (done) {
      const userData = generateUserData('CreateAddsUser')
    request(app)
      .post('/users')
      .send(userData)
      .expect(303)
      .then((res) => {
        // console.log(userData.email)
        User.findOne({ email: userData.email }).then(insertedRecord => {
          expect(insertedRecord).not.toBeNull()
          expect(userData).not.toBeNull()
          expect(insertedRecord.name.first).toBe(userData.first)
          done()
        })
      }).catch(e => done(e))
  })


  it('post /users stores data - full data check', function (done) {
    const userDataFlat = generateUserDataFlat('Dos')

    request(app)
      .post('/users')
      .send(userDataFlat)
      .expect(303)
      .then((res) => {
        User.findOne({ email: userDataFlat.email })
          .exec()
          .then(u => {
            expect(u.email).toBe(userDataFlat.email)
            expect(u.name.first).toBe(userDataFlat.first)
            expect(u.name.last).toBe(userDataFlat.last)
            done()
          })
      })
  })
  it('send with nested attributes does also work', function (done) {
    const userDataNested = generateUserDataNested('Tres')

    request(app)
      .post('/users')
      .send(userDataNested)
      .expect(303)
      .then((res) => {
        User.findOne({ email: userDataNested.email })
          .exec()
          .then(u => {
            expect(u.email).toBe(userDataNested.email)
            expect(u.name.first).toBe(userDataNested.name.first)
            expect(u.name.last).toBe(userDataNested.name.last)
            done()
          })
      })
  })
})
