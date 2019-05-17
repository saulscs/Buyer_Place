const mongoose = require('mongoose')
const { Schema } = mongoose 


const productSchema = new Schema (
{
owner: {
  type: Schema.Types.ObjectId,
  ref: "User"
},
 title: String,
 description: String,
 price: String,
 category: {
   type: String,
   enum:["Mac", "Iphone","Ipad","Apple Watch","Accesorios","Otros"]
 },
 image: String,
 posted_by: {
   type: Schema.Types.ObjectId,
   ref: "User"
 },
 address:{
  pais: String,
  estado: String,
  ciudad: String,
  alcaldia: String,
  colonia: String,
  direccion: String,
  location: { coords: [String], lat: String, lng: String }
 },
apply: {
  email: String,
  phone: String,
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



module.exports = mongoose.model('Product', productSchema)