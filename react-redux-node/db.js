const mongoose = require('mongoose')

// const MongoClient = require('mongodb').MongoClient;
// const uri ="mongodb+srv://madhusudan:Mysql_80@cluster0.vsrmk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// client.connect(err =>
//     {
//                 if (!err)
//                     console.log('Mongodb connection succeeded.')
//                 else
//                     console.log('Error while connecting MongoDB : ' + JSON.stringify(err, undefined, 2))
//             });

mongoose.connect('mongodb://localhost:27017/postManagerDB',{useNewUrlParser:true,useUnifiedTopology:true},
    err => {
        if (!err)
            console.log('Mongodb connection succeeded.')
        else
            console.log('Error while connecting MongoDB : ' + JSON.stringify(err, undefined, 2))
    })