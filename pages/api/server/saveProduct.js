
import dbConnect from "../../../lib/dbConnect";
import SaveProduct from "../../../model/SaveProduct";
// (await)
dbConnect();

export default async function handler(req, res) {
  const { method } = req;
  switch (method) {
    case "GET":
      try {
        const clients = await SaveProduct.find({})

        res.status(200).json({success: true, data:clients });
      } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, error });
      }
      break;

    case "POST":
      try {
        const { refe, saveEmail, saveName, savePro} = req.body;
if(!refe && !saveEmail && !saveName && !savePro ) return 'invalid Data'
        
        const client = await SaveProduct.create({refe, saveEmail, saveName, savePro});

        res.status(201).json({success:true, data:client});
      } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, error });
      }
      break;
    
  }
}

