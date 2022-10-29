// import dbConnect from "../../../lib/dbConnect";
// import Poster from "../../../model/SaveProduct";

// dbConnect();


// export default async (req, res) => {
//     const {
//       query: { idix },
//       method,
//     } = req;
  
//     switch (method) {
//       case "GET":
//       try {
        
//         const note = await Poster.findById(idix);

//         if (!note) {
//           return res.status(400).json({ success: false });
//         }

//         res.status(200).json({ success: true, data: note });
//       } catch (error) {
//         res.status(400).json({ success: false }, 'gggggggggg');
//       }
//       break;
//         case "PATCH":
//           try {
//             const note = await Poster.findByIdAndUpdate({email: idix}, { $addToSet:{
//               savePro: req.body
//             } }, {
//               new: true,
//             });
            
//             if (!note) {
//               return res.status(400).json({ success: false });
//             }
//             res.status(200).json({ success: true, data: note });
//           } catch (error) {
//             res.status(400).json({ success: false, data: "dd" });
//           }
//           break;
//         // case "POST":
//         //   try {
//         //     const note = await SaveProduct.updateOne(save, req.body);
//         //     if (!note) {
//         //       return res.status(400).json({ success: false });
//         //     }
//         //     res.status(200).json({ success: true, data: note });
//         //   } catch (error) {
//         //     res.status(400).json({ success: false, data: "dd" });
//         //   }
//         //   break;
//         case "PUT":
//           try {
//             const note = await SaveProduct.findOneAndUpdate({email: save}, { $pull:{
//               savePro: req.body.id
//             } }, {
//               new: true,
//             });
            
//             if (!note) {
//               return res.status(400).json({ success: false });
//             }
//             res.status(200).json({ success: true, data: note });
//           } catch (error) {
//             res.status(400).json({ success: false, data: "dd" });
//           }
//           break;
      
//     }
//   };