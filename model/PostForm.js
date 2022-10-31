import mongoose from "mongoose";

const postForm = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    prePrice: {
      type: Number,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },
    userEmail: {
      type: String,
      required: true,
    },
    userName: {
      type: String,
      required: true,
    },
    timix: {
      type: String,
      required: true,
    },
    savix: {
      type: Boolean,
      default: false,
    },
    images: { type: Array, default: [] },
    commt: [
      {
        gogo: {
          type: String,
          // required: true
        },
        dodo: {
          type: String,
          // required: true
        },
        soso: [String],
        // type : [String]
        // type : Array , "default" : []
      },
    ],
  },

  {
    timestamps: true,
  }
);

const Poster = mongoose.models.Poster || mongoose.model("Poster", postForm);
export default Poster;

// postForm.path('website').validate((val) => {
//     urlRegex = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/
//     return urlRegex.test(val);
// }, 'Invalid URL.');
