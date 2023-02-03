var mongose = require('mongoose');
var app = require('./app');
var port = 3800;

mongose.Promise=global.Promise;

mongose.set("strictQuery",false);
mongose.connect("mongodb://127.0.0.1:27017/Heroes",{useUnifiedTopology:true,useNewUrlParser:true})
.then(()=>{console.log('conexion exitosa');
app.listen(port,()=>{console.log("servidor corriendo 3800")})})
.catch(err=>console.log(err));