const mongoose = require('mongoose');

const Post = mongoose.model('Post', {
    pais : {type : String},
    numerofigu : {type : Number},
    cantidad : {type : Number},
    descripcion : {type : String},
    contacto: {type : Number},

});

module.exports = Post;