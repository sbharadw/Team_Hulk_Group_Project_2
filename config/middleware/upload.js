const multer = require("multer");
const path = require("path");
const dirname = path.resolve(path.dirname('')); 

const imageFilter = (req, file, cb) => {
if (file.mimetype.startsWith("image")) {
    cb(null, true);
} else {
    cb("Please upload only images.", false);
}
};

var storage = multer.diskStorage({
destination: (req, file, cb) => {

    console.log(dirname)

    cb(null, dirname + "/Assets/photos");
},
filename: (req, file, cb) => {
    cb(null, `${Date.now()}-flam-${file.originalname}`);
},
});

var uploadFile = multer({ storage: storage, fileFilter: imageFilter });
module.exports = uploadFile;