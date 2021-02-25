const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const apartmentTypeSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    imagePath: {
        type: String,
        required: true
    }
},{
    timestamps: true
});

var ApartmentsType = mongoose.model('ApartmentType', apartmentTypeSchema);

module.exports = ApartmentsType;