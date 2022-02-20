const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://Aasish:Aasish6699@cluster0.zidxp.mongodb.net/blogappDb?retryWrites=true&w=majority', 
err => {
    if(!err)
    console.log('Mongodb connection succeeded.')
    else
    console.log('Error while connecting Mongodb : '+ JSON.stringify(err,undefined,2))
 })
