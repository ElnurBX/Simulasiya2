
const mongoose = require("mongoose")

const Service = mongoose.model("Service", new mongoose.Schema({
    title: {
        type: String
    },
    discription: {
        type: String
    },
    img: {
        type: String
    },
    Author__title: {
        type: String
    },
    Author__img: {
        type: String
    },
    price: {
        type: String
    }   
}))

module.exports = { Service }
