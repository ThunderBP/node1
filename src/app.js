let express = require('express')
const app = express()

app.get('/status', function (req, res){
    res.send('Hello nodejs sever')
})

let port = 8081

app.listen(port, function(){
    console.log('sever running on'+ port)
})