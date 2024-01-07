const mongoose = require('mongoose');

const familySchema = new mongoose.Schema({
    fatherName: {
        type: String,
        required: true,
    },
    motherName: {
        type: String,
        required: true,
    },
    fatherImage: {
        type: Array,
        required: true,
    },
    motherImage: {
        type: Array,
        required: true,
    },
    childrenNames: {
        type: Array,
        required: true,

    },
    childrenImages: {
        type: Array  
    },
});

const family = mongoose.model('Family', familySchema);

module.exports = family;
