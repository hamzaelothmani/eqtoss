// import dbConnect from "../../../lib/dbConnect"
// import SaveProduct from "../../../model/SaveProduct";


// dbConnect();

// export default async (req, res) => {
//   const {
//     query: { save },
//     method,
//   } = req;

//   switch (method) {
//     case "GET":
//       try {
//         const note = await SaveProduct.findById(save);

//         if (!note) {
//           return res.status(400).json({ success: false });
//         }

//         res.status(200).json({ success: true, data: note });
//       } catch (error) {
//         res.status(400).json({ success: false });
//       }
//       break;
//     case "PATCH":
//       try {
//         const note = await SaveProduct.findOneAndUpdate({email: save}, { $pull:{
//           savePro: req.body.id
//         } },
//         //  {
//         //   new: true,
//         // }
//         );
        
//         if (!note) {
//           return res.status(400).json({ success: false });
//         }
//         res.status(200).json({ success: true, data: note });
//       } catch (error) {
//         res.status(400).json({ success: false, data: "dd" });
//       }
//       break;
//     // case "POST":
//     //   try {
//     //     const note = await SaveProduct.updateOne(save, req.body);
//     //     if (!note) {
//     //       return res.status(400).json({ success: false });
//     //     }
//     //     res.status(200).json({ success: true, data: note });
//     //   } catch (error) {
//     //     res.status(400).json({ success: false, data: "dd" });
//     //   }
//     //   break;
//     case "PUT":
//       try {
//         const { name, description } = req.body;
//         if (!name && !description) return "inavalid data";
//         const note = await SaveProduct.findByIdAndUpdate(
//           id,
//           { name, description },
//           {
//             new: true,
//             runValidators: true,
//           }
//         );

//         if (!note) {
//           return res.status(400).json({ success: false });
//         }

//         res.status(200).json({ success: true, data: note });
//       } catch (error) {
//         res.status(400).json({ success: false });
//       }
//       break;
//     case "DELETE":
//       try {
//         const deletedNote = await SaveProduct.deleteOne({ _id: save });

//         if (!deletedNote) {
//           return res.status(400).json({ success: false });
//         }

//         res.status(200).json({ success: true, data: {} });
//       } catch (error) {
//         res.status(400).json({ success: false });
//       }
//       break;
//     default:
//       res.status(400).json({ success: false });
//       break;
//   }
// };