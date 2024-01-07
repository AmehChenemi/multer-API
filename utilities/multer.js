const multer = require('multer')


const storage = multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null, './uploads')
    },
    filename:(req, file, cb)=>{
        cb(null, file.originalname)
    }
})

const fileFilter = (req, file, cb)=>{
    if(file.mimetype.startsWith('image/')){
        cb(null, true)
    }
    else{
        cb(new Error('file not supported,image only'),false)
    }
}

const fileSize = {
    limit: 1024 * 1024 * 10
}

const uploader = multer({
    storage,
    fileFilter,
    limits: fileSize
}).fields([
    { name: 'fatherImage', maxCount: 1 },
    { name: 'motherImage', maxCount: 1 },
    { name: 'childrenImages', maxCount: 7 }
]);

module.exports = uploader;

