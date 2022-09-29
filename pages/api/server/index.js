
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
      try {
        const { images } = req.body;
if(!images) return 'invalid Data'
        
        const client = await Poster.create({ images });

        res.status(201).json({success:true, data:client});
      } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, error });
      }
      break;
    // case "POST":
    //   try {
    //     const { title,  description, price, url, category } = req.body;

    //     if (!title&& !description && !price && !url && !category) throw "invalid data";
    //     const client = await Poster.create({ title,  description, price, url, category });

    //     res.status(201).json({success:true, data:client});
    //   } catch (error) {
    //     console.log(error);
    //     res.status(500).json({ success: false, error });
    //   }
    //   break;
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

