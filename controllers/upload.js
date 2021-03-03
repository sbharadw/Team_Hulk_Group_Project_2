const fs = require("fs");
const path = require("path");
const dirname = path.resolve(path.dirname(''));


const db = require("../models");
const itemimage = db.Itemimage;

const uploadFiles = async (req, res) => {

    console.log("UPLOAD FILE CALLED")


    try {
        console.log(req.file);

        if (req.file == undefined) {
            return res.send(`You must select a file.`);
        }

        itemimage.create({
            type: req.file.mimetype,
            name: req.file.originalname,
            data: fs.readFileSync(
                dirname + "public/assets/photos/" + req.file.filename
            ),
        }).then((image) => {
            fs.writeFileSync(
                dirname + "public/assets/tmp/" + image.name,
                image.data
            );

            return console.log(`File has been uploaded.`);
        });
    } catch (error) {
        console.log(error);
        return res.send(`Error when trying upload images: ${error}`);
    }
};

module.exports = {
    uploadFiles,
};