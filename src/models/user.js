const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
// Schema for a User
const userSchema = new mongoose.Schema({
    firstName:{
        type: String,
        required: true,
        trim: true,
        min: 3,
        max: 20
    },
    lastName:{
        type: String,
        required: true,
        trim: true,
        min: 3,
        max: 20
    },
    userName:{
        type: String,
        required: true,
        trim: true,
        unique: true,
        index: true,
        lowercase:true
    },
    email:{
        type: String,
        required: true,
        trim: true,
        unique:true,
        lowercase: true
    },
    hash_password:{
        type: String,
        require:true
    },
    role:{
        type:String,
        enum: ['user','admin'],
        default: 'user'
    },
    contactNumber :{type: String},
    profilePicture :{type: String}
}, {timestamps: true} );

// Mongoose Virtual : these parameters will not be stored in mongodb database.
// These are created in runtimeb and stored in memory
// Using bcrypt we encrypt our password and we require a salt here
// A cryptographic salt is made up of random bits added to each password instance before its hashing 
userSchema.virtual('password').set(function(password){
    this.hash_password= bcrypt.hashSync(password, 10);
});

userSchema.virtual('fullName').get(function(){
    return `${this.firstName}${this.lastName}`
})

//method to authenticate using password 
userSchema.methods = {
    authenticate : function(password){
        return bcrypt.compareSync(password, this.hash_password)
    }
}

module.exports = mongoose.model('User', userSchema);