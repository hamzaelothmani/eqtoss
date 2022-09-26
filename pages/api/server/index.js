
import dbConnect from "../../../lib/dbConnect";
import Poster from "../../../model/PostForm";
// (await)
dbConnect();

export default async function handler(req, res) {
  const { method } = req;
  switch (method) {
    case "GET":
      try {
        const clients = await Poster.find({});
        res.status(200).json({success: true, data:clients });
      } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, error });
      }
      break;

    case "POST":
      console.log("hi",req.body);
      let  poster = new Poster (req.body);
      poster.save((err, posteer) => {
      if (err) {
      res.status(500).send(err);
      }
      res.status(201).json(posteer);
      });
      break;
  }
}



// import dbConnect from "../../../lib/dbConnect";
// import Poster from "../../../model/PostForm";

// export default async function handler(req, res){
//     const {method} = req

//     dbConnect();
//     if(method === "GET"){
// try{
//     const posters = await Poster.find()
//     res.status(200).json(posters)
// }catch(err){
//     res.status(500).json(err)
// }
//     }
//     if(method === "POST"){
//         try{
//           const { name, description } = req.body;
//             const posters = await Poster.create({ name, description })
//             res.status(201).json(posters)
//         }catch(err){
//             res.status(500).json(err)
//         }
//     }
// }

