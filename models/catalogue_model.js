const mongoose = require("mongoose");
const { float } = require("webidl-conversions");

const catalogueShema = mongoose.Schema({
    nom: {type:String, required:true, minlength:3, maxlength:50},
    categorie: {type:String, required:true},
    description: {type:String, required:true, maxlength:250},
    marque: {type:String, required:true, maxlength:100},
    prix: {type:Number, required:true},
    quantite: {type:Number, required:true}
})

module.exports = mongoose.model("catalogueProduit", catalogueShema);