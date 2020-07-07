'use strict'

const mongoose = require('mongoose')
const { Schema } = require('mongoose')
// const Subscriber = require('./subscriber')
const passportLocalMongoose = require('passport-local-mongoose')

var userSchema = new Schema(
    {
        name: {
            first: {
                type: String,
                trim: true
            },
            last: {
                type: String,
                trim: true
            }
        },
        email: {
            type: String,
            required: true,
            lowercase: true,
            unique: true
        }
    },
    {
        timestamps: true
    }
)

userSchema.virtual('fullName').get(function () {
    return `${this.name.first} ${this.name.last}`
})

userSchema.plugin(passportLocalMongoose, { usernameField: 'email' })
module.exports = mongoose.model('User', userSchema)
