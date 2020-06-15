var express = require('express');
var router = express.Router();
const crypto = require('crypto');
const saltedMd5 = require('salted-md5');
var knex = require('knex')({
  client: 'mysql',
  connection: {
    host : 'sql12.freesqldatabase.com',
    user : 'sql12348491',
    password : 'IdKAyvbYZt',
    database : 'sql12348491'
  }
});

/* GET users listing. */
router.post('/login', function(req, res, next) {
 
knex.from('ilance_users').where('username', req.body.username)
.then((rows) => {
  if(rows.length>0){
  
    for (row of rows) {
      const saltedHash = saltedMd5(req.body.password, row.salt);
      if(row.username==req.body.username || row.password==saltedHash){
      res.send('Success');
    }
  }
  }else{
      res.send('Username or password Invalid')
    }
    
})
.catch((err) => { console.log( err); throw err })
.finally(() => {
    // knex.destroy();
    
 
});
 
  
});

module.exports = router;
