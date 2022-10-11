import mongoose from "mongoose";


const schema = new mongoose.Schema({
   
    title: "String"
   
})
const Modell = mongoose.models.Modell ||  mongoose.model('Modell', schema)
export default Modell 