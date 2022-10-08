
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
        const { images, title,  description, price, url, category, prePrice } = req.body;
if(!images && !title && !description && !price && !url && !category && !prePrice) return 'invalid Data'
        
        const client = await Poster.create({ images, title,  description, price, url, category, prePrice });

        res.status(201).json({success:true, data:client});
      } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, error });
      }
      break;
    
  }
}



