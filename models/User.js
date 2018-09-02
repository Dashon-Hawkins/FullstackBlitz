import { Mongoose } from 'mongoose';

const mongoose = require('mongoose');

const  {Schema} = mongoose;

const userSchema= new Schema( {
googleId:String
});

Mongoose.model('users', userSchema);

