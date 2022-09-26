const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/figuritas', (err)=> {
    if(err) {
        console.log('Conection has ended with error '+ err);
    } else {
        console.log('Conectado a MongoDB en local');
    }
});

module.exports = mongoose;