const family = require('../model/model.js')


exports.signUp = async (req, res) => {
    try {
        const { fatherName, motherName, childrenNames } = req.body;
        const file = req.files
    
        const famData = await family.create({
            fatherName,
            motherName,
            childrenNames,
            fatherImage:file.map(file=>file.filename),
            motherImage:file.map(file=>file.filename),
            childrenImages:file.map(file=>file.filename),
        });

        if (!famData) {
            res.status(404).json({
                message: 'Unable to sign up'
            });
        } else {
            res.status(200).json({
                message: 'Congratulations!!! You have successfully signed up',
                famData
            });
        }
    } catch (err) {
        res.status(500).json({
            error: err.message
        });
    }
}
    