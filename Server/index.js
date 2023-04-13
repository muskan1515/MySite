const express=require('express');
const mongoose=require('mongoose');
const app=express();
const cors=require('cors');
const fs=require('fs');
const formidableMiddleware=require('express-formidable');
var bodyParser = require('body-parser');

const adminRoutes=require('./routes/admin');

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());
 
// var multer = require('multer');
 
// var storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, 'uploads')
//     },
//     filename: (req, file, cb) => {
//         cb(null, file.fieldname + '-' + Date.now())
//     }
// });

app.use(formidableMiddleware({
  encoding: 'utf-8',
   uploadDir: __dirname+'/uploads/',
}
// ,[
//   {
//     event: 'fileBegin',
//     action: function (req, res, next, name, file) {console.log(file);}
//   }, 
//   {
//     event: 'field',
//     action: function (req, res, next, name, value) { console.log(value); }
//   }
// ]
));
 
// var upload = multer({ storage: storage });

app.use(bodyParser.urlencoded({ extended: false }));
// app.use(
//   multer({ storage: storage }).single('file')
// );

app.use(cors(
  {
    'Access-Control-Allow-Origin': "*",
    'Access-Control-Allow-Headers': true,
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE'
  }
));

app.use(cors());

app.use('/admin',adminRoutes);

const uri = "mongodb+srv://muskanShop:Muskan@cluster0.mytlv0o.mongodb.net/shop";  
mongoose.connect(
    uri
)
  .then(result => {
    console.log("db on!");
    app.listen(8080);
  })
  .catch(err => {
    console.log(err);
  });
