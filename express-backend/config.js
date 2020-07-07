
const config = {
    port: process.env.PORT || 3001,
    mongoURI:  process.env.MONGODB_URI || ((process.env.NODE_ENV === 'test') ? 'mongodb://localhost:27017/wtat1_exam_test' : 'mongodb://localhost:27017/wtat1_exam')
}

module.exports = config
