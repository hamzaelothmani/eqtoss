import dbConnect from "../../../lib/dbConnect";

import Poster from "../../../model/PostForm";


export default async function handler(req, res) {
    const {method } = req
    
    dbConnect();

   if(method === "GET" ){
  
      
      try {
        const { category } = req.query
   

 
        const agg = [
          {
            $search: {
              autocomplete: {
                query: category,
                path: 'category',
                fuzzy: {
                  maxEdits: 2,
                },
              },
            },
          },
          {
            $limit: 5,
          },
          {
            $project: {
              _id: 1,
              title: 1,
              images: 1,
              description: 1,
              category:1,
              prePrice: 1,
              price: 1,
              url:1
            },
          },
        ]
    
        const response = await Poster.aggregate(agg)
    
        return res.json(response)
      } catch (error) {
        console.log(error)
        return res.json([])
      }

    // }else {
    //   try {
    //     const clients = await Poster.find({});
    //     res.status(200).json({success: true, data:clients });
    //   } catch (error) {
    //     console.log(error);
    //     res.status(500).json({ success: false, error });
    //   }
    // }
    
  
  
   

      
       
   
       
     
}
}