import mongoose from "mongoose";

const postForm = new mongoose.Schema({
  // name : {
  //   type: String,
  //   required: true,
    
  // },
  // price : {
  //   type: Number,
  //       required: true,
  //       unique: true
  // },
  // url : {
  //   type: String,
  //   required: true,
  // },

  // description : {
  //   type: String,
  //   required: true,
  // },
  image : { type: String,
      required: true, },
},
{
    timestamps: true
}

);

const Poster = mongoose.models.Poster || mongoose.model("Poster", postForm);
export default Poster;




// postForm.path('website').validate((val) => {
//     urlRegex = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/
//     return urlRegex.test(val);
// }, 'Invalid URL.');

