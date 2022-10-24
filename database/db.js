const mongoose = require('mongoose');

const connectToDb = () => {
    mongoose.connect(
        "mongodb+srv://amandita:admin@todo-list.rmsjtdv.mongodb.net/?retryWrites=true&w=majority",
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
    ).then(() => {
        console.log('Ta rodando piranha')
    }).catch((err) =>
        console.log(err)
    )
}
module.exports = connectToDb