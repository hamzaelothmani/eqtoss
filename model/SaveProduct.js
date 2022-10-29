import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
    unique: true,
    // minlength: 5,
  },
  boolix :{
    type: Boolean,
     default: false
  },
  savePro: {
    type : [String]
    // type : Array , "default" : []
  },
});

const SaveProduct = mongoose.models.SaveProduct || mongoose.model("SaveProduct", userSchema);
export default SaveProduct;