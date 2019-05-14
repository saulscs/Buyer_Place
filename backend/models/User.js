const mongoose = require('mongoose')
const PLM      = require('passport-local-mongoose')

const userSchema = new mongoose.Schema (
{
 email: String,
 unique: true,
 require: true  
},
{
  name: String,
  image: {
    type: String
  },
  role: {
    type: String,
    enum: ['Admi', 'User'],
    default: 'User'
  },
  active: {
    type: Boolean,
    default: true
  }
},
{ 
  timestamps: true, 
  versionKey: false 
}
)


userSchema.plugin(PLM, { usernameField: 'email' })

module.exports = mongoose.model('User', userSchema)