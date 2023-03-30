// require('dotenv').config()
// const fs = require('fs')
// const S3 = require("aws-sdk/clients/s3")
// const sharp = require('sharp')


// const bucketName = process.env.AWS_BUCKET_NAME
// const region = process.env.AWS_BUCKET_REGION
// const accessKeyId = process.env.AWS_ACCESS_KEY
// const secretAccessKey = process.env.AWS_SECRET_KEY


// const s3 = new S3({
//     region,
//     accessKeyId,
//     secretAccessKey
// })

// //Uploads File to s3
// function uploadFile(file) {
//     const fileStream = fs.createReadStream(file.path)
//     const uploadParams = {
//         Bucket: bucketName,
//         Body: fileStream,
//         Key: file.filename
//     }
//     return s3.upload(uploadParams).promise()
// }
// exports.uploadFile = uploadFile

// function getThumbnails(fileKey){
//     const downloadParams = {
//         Key: fileKey,
//         Bucket: "upload-file-s3-demo/thumbnails"
//     }
//     const result = s3.getObject(downloadParams).createReadStream()
//     return result
// }
// exports.getThumbnails = getThumbnails
// //Downloads a file from s3
// function getFileStream(fileKey) {
//     const downloadParams = {
//         Key: fileKey,
//         Bucket: bucketName
//     }
//     return s3.getObject(downloadParams).createReadStream()
// }
// exports.getFileStream = getFileStream
// exports.handler = async (event) => {
//     const bucketName = event.Records[0].s3.bucket.bucketName
//     const objectKey = event.Records[0].s3.object.key;
//     const inputObject = await s3.getObject({ Bucket: bucketName, Key: objectKey }).promise();

//     const thumbnail = await sharp(inputObject.Body).resize(200, 200).toBuffer();

//     const uploadParams = {
//         Bucket: bucketName,
//         Body: thumbnail,
//         Key: `thumbnails/${objectKey}`
//     };      

//     await s3.upload(uploadParams).promise();

//     return `Thumbnail generated for ${objectKey}`;
// }