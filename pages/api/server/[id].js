import dbConnect from "../../../lib/dbConnect";
import Poster from "../../../model/PostForm";

dbConnect();

export default async (req, res) => {
  const {
    query: { id },
    method,
  } = req;

  switch (method) {
    case "GET":
      try {
        
        const note = await Poster.findById(id);

        if (!note) {
          return res.status(400).json({ success: false });
        }

        res.status(200).json({ success: true, data: note });
      } catch (error) {
        res.status(400).json({ success: false }, 'gggggggggg');
      }
      break;
      // case "PATCH":
      //   try {
      //     const note = await Poster.findByIdAndUpdate( id, { $addToSet:{
      //       commt: [{
      //         gogo: req.body.gogo,
      //         dodo: req.body.dodo,
      //         soso: req.body.soso
      //       }]
      //     } }, {
      //       new: true,
      //     });
          
      //     if (!note) {
      //       return res.status(400).json({ success: false });
      //     }
      //     res.status(200).json({ success: true, data: note });
      //   } catch (error) {
      //     res.status(400).json({ success: false, data: "dd" });
      //   }
      //   break;
      case "PATCH":
        try {
          const note = await Poster.findByIdAndUpdate( id, { $addToSet:{
            commt: req.body.hamza
          } }, {
            new: true,
          });
          
          if (!note) {
            return res.status(400).json({ success: false });
          }
          res.status(200).json({ success: true, data: note });
        } catch (error) {
          res.status(400).json({ success: false, data: "dd" });
        }
        break;
        case "PUT":
          try {
            const note = await Poster.findByIdAndUpdate( id, { $pull:{
              commt: req.body.hamza
            } }, {
              new: true,
            });
            
            if (!note) {
              return res.status(400).json({ success: false });
            }
            res.status(200).json({ success: true, data: note });
          } catch (error) {
            res.status(400).json({ success: false, data: "dd" });
          }
          break;
    case "DELETE":
      try {
        const deletedNote = await Poster.deleteOne({ _id: id });

        if (!deletedNote) {
          return res.status(400).json({ success: false });
        }

        res.status(200).json({ success: true, data: {} });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
};

// dbConnect();

// export default async function handler(req, res) {
//   const { method } = req;
//   const { PosterID } = req.query;
//   switch (method) {
//     case 'GET':
//       try {
//           const note = await Poster.findById(id);

//           if (!note) {
//               return res.status(400).json({ success: false });
//           }

//           res.status(200).json({ success: true, data: note });
//       } catch (error) {
//           res.status(400).json({ success: false });
//       }
//     case "PUT":
//       try {
//         const { name, description } = req.body;
//         if (!name && !description) return "inavalid data";
//         await Poster.updateOne({ _id: PosterID }, { name, description });
//         res.status(200).json({ success: true });
//       } catch (error) {
//         console.log(error);
//         res.status(500).json({ success: false, error });
//       }
//       break;

//     case "DELETE":
//       try {
//         await Poster.deleteOne({ _id: PosterID });
//         res.status(200).json({ success: true });
//       } catch (error) {
//         console.log(error);
//         res.status(500).json({ success: false, error });
//       }
//       break;
//   }
// }
