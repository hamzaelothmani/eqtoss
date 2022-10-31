import mongoose from "mongoose";
import uniqueValidator from 'mongoose-unique-validator'

const Schema = mongoose.Schema;

const saveProSchema = new Schema({
  refe: {
    type: String,
    required: true,
    
 
  },
  saveEmail: {
    type: String,
    required: true,
    unique: true,
    index: true
    
  },
  saveName: {
    type: String,
    required: true,
    unique: true,
    index: true
    // minlength: 5,
  },
  
  // boolix :{
  //   type: Boolean,
  //    default: false
  // },
  savePro: {
    type : [String]
    // type : Array , "default" : []
  },
});
saveProSchema.plugin(uniqueValidator)
const SaveProduct = mongoose.models.SaveProduct || mongoose.model("SaveProduct", saveProSchema);
export default SaveProduct;