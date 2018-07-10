//const express = require('express')
//const router = express.Router()
var redis = require('redis');
var client = redis.createClient( '6379',process.env.REDIS_URL);
console.log(process.env.R_HOST);
exports.index = function(req,res){
  res.render('index', { title: 'USUARIOS' });
};
/*
router.get('/', (req, res) => {
  res.render('index')
})  */



/*
router.get('/crear', (req, res) => {
    res.render('crear', {
      data: {},
      errors: {}
    })
  })*/

  exports.getUsers = function (req, res){
    var users = [];
    client.hgetall("usuarios", function(err, objs) {
        if(objs){
          console.log("hay objetos");
            for(var u in objs) {
                var newUser = {
                    text: objs[u],
                    id:u
                };
                users.push(newUser);
            }
        }else{
          
            var newUser = {
                text: "No existen usuarios",
                id:"0"
            };
            console.log(JSON.stringify(newUser));
            users.push(newUser);
        }
        res.render('index', {title: 'Usuarios', users: users});
    });
  }

  exports.createUser = function (req, res){
    var users = {};
    console.log("entrada 1");
    users.nombre = req.body['nombre'];
    users.email = req.body['email'];
    users.pswd = req.body['pswd'];
    dataId = "id." + users.nombre;
    dataUser = "nombre: "+users.nombre + " | Email: "+ users.email + " | Password: " + users.pswd; 
    console.log(dataId + " - " +dataUser);
    client.hset("usuarios", dataId, dataUser);
    res.redirect("/");
  }

/*router.get('/lista', (req, res) => {
    global.dats = undefined;
    var datas = client.hgetall('usuarios', function(err, results) {
        if (err) {
            // do something like callback(err) or whatever
        } else {
           // do something with results
                 //global.dats = results;
                 //console.log("datas: " + JSON.stringify(results));
                 //var i = 0;
                 var separateObj = Object.keys(results);
                 var resArr = getFields(results,separateObj[0] );
                 console.log(resArr);
                 for(var i =0;i< separateObj.length;++i) {
                    //var dataString = results[separateObj[i]];
                    var resArr = getFields(results[i],separateObj[0] );
                    //console.log("Keys: " + JSON.stringify(results[i][separateObj[i]]))  ;
                    console.log("i: " + i + " - " + resArr);
                 }
                res.render('lista', {
                    data: results,
                    errors: {}
                })
           //console.log(results)
           
        }
     });
     
    
})*/


/*
router.post('/crear', (req, res) => {
    
    console.log("Nombre: " + JSON.stringify(req.body));
    var id = "id-" + req.body.nombre;
    console.log("id = " + id);
    client.hset('usuarios',id,JSON.stringify(req.body));    

    res.render('crear', {
      success:true,
      data: req.body, // { message, email }
      errors: {
        message: {
          msg: 'A message is required'
        },
        email: {
          msg: 'That email doesn‘t look right'
        }
      }
    })
  })
*/
//module.exports = router