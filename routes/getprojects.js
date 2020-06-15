var express = require('express');
var router = express.Router();

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
router.get('/getprojects', function(req, res, next) {
  
knex.select('*').from('ilance_projects').join('ilance_users','ilance_users.user_id', '=', 'ilance_projects.user_id').leftJoin('categories', 'categories.cid', 'ilance_projects.cid')
.then((rows) => {
  if(rows.length>0){

      res.send(rows);

  
  }else{
      res.send('Failure')
    }
    
})
.catch((err) => {   res.send(err); throw err })
.finally(() => {
    // knex.destroy();
    
 
});
 
  
});

module.exports = router;
