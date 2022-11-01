
import dbConnect from "../../../lib/dbConnect";
import Poster from "../../../model/PostForm";
// (await)
dbConnect();

export default async function handler(req, res) {
  const { method } = req;
  switch (method) {
    case "GET":
      try {
        const page = req.query.page || 0
        const sortt = req.query.sortt || "createdAt"
        const filterr = req.query.filterr  || 'All'
        const orderBy = req.query.orderBy  || 1
        
        // .where({category: filterr}).sort({createdAt: -1})
        // .sort({sort: 1})
        // .where({category: filter})
        const products = 10
        const clients = await Poster.find({ category: ( filterr === "All" && {$exists: true}  ||filterr ||  {$exists: true}) }).sort([[(sortt== "Date" ? "createdAt": sortt), orderBy]]).skip(page * products).limit(products).exec();
        res.status(200).json({success: true, data:clients });
      } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, error });
      }
      break;

    case "POST":
      try {
        const { images, title,  description, price, url, category, prePrice, userEmail, userName, timix, commt } = req.body;
if(!images && !title && !description && !price && !url && !category && !prePrice && !userEmail && !timix && !userName && !commt ) return 'invalid Data'
        
        const client = await Poster.create({ images, title,  description, price, url, category, prePrice, userEmail, userName, timix, commt  });

        res.status(201).json({success:true, data:client});
      } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, error });
      }
      break;
    
  }
}

