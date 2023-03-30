const express = require("express")

// const fs = require('fs')
// const utils = require('util')
// const unlinkFile = utils.promisify(fs.unlink)


// const multer = require("multer")
// const upload = multer({ dest: "uploads/" })
const app = express()

app.get("/images",(req,res)=>{
    console.log("Hello")
})

// const { uploadFile, getFileStream, handler, getThumbnails } = require("./s3")

// app.get("/images/:key", (req, res) => {
//     const key = req.params.key
//     const readStream = getFileStream(key)
//     readStream.pipe(res)
// })

// app.get("/images/thumbnails/:key", (req, res) => {
//     const key = req.params.key
//     const readStream = getThumbnails(key)
//     readStream.pipe(res)
// })

// app.post("/images", upload.single('image'), async (req, res) => {
//     const file = req.file
//     const result = await uploadFile(file)
//     await unlinkFile(file.path)
//     const thumbnailKey = `thumbnails/${result.key}`;
//     await handler({
//         Records: [{
//             s3: {
//                 bucket: {
//                     bucketName: result.Bucket
//                 },
//                 object: {
//                     key: result.Key
//                 }
//             }
//         }]
//     });
//     const description = req.body.description
//     res.send({
//         imagePath: `/images/${result.key}`,
//         thumbnailPath: `/images/${thumbnailKey}`
//     });
// })

app.listen(8000, () => {
    console.log("Listening on Port 8000")
})