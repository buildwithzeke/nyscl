import mongoose from 'mongoose'


const userSchema = new mongoose.Schema({
    callup: String,
    email: String,
    pass: String,
});

const corpers = mongoose.model('corpers', userSchema);
export default corpers;