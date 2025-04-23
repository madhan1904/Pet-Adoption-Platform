const mongoose = require('mongoose')
const connection_obj = mongoose.createConnection('mongodb://localhost:27017')

const db = connection_obj.useDb("Pet-Adoption");

module.exports={db}