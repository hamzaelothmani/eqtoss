const cloudinary = require('cloudinary');
const dotenv=require('dotenv');

dotenv.config();

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})

exports.uploads = (file, folder) => {
    return new Promise(resolve => {
        cloudinary.uploader.upload(file, (result) => {
            resolve({
                url: result.url,
                id: result.public_id
            })
        }, {
            resource_type: "auto",
            folder: folder
        })
    })
}
// import dbConnect from "../../../lib/dbConnect";
// import Poster from "../../../model/PostForm";
// // import cloudinary from 'cloudinary'

// const cloudinary = require('cloudinary').v2

// // (await)
// cloudinary.config({
// cloud_name: 'dg8bm9sad' ,
// api_key: '631468814363763',
// api_secret: 'eFHVDJ4pDwyE7y5l87DDbzIpHyA'
// })

// export default async function handler(req, res) {


//     const {method } = req
    
//     dbConnect();

//    if(method === "POST" ){
//   try{

//       const {images} = req.body
//   let promises = []
//   images.forEach(async image=>{
//     promises.push(

//         cloudinary.uploader.upload(images, {
//         folder: 'mangix'
//        })
//     )
//   })
//   const response = Promise.all(promises)
//   res.send(response)
//       res.send(res)
//   }catch(err){
//     console.log(err);
//             res.status(500).json({ success: false, err });
//   }
   
//       try {
//         const { images } = req.body;
// if(!images) return 'invalid Data'
        
//         const client = await Poster.create({ images });

//         res.status(201).json({success:true, data:client});
//       } catch (error) {
//         console.log(error);
//         res.status(500).json({ success: false, error });
//       }
    
    
//   }
// }
