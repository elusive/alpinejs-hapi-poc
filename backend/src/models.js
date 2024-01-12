const mongoose = require('mongoose');

module.export = function mongoConnect() {
    mongoose.connect('mongodb://localhost:27017/books', { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => console.log('MongoDB connected....'))
        .catch(err => console.log(err));
}
