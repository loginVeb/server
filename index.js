import { createConnection } from 'mysql';
import express from 'express';
import cors from 'cors';


const app = express();
app.use(cors());

const conn = createConnection({
    host:process.env.DB_HOST || 'oyu.h.filess.io', 
    user:process.env.DB_USERNAME || 'auth_symbolburn', 
    password:process.env.DB_PASSWORD || '4b19a847f003962746a0cbf1534ae96aa2c30b0e', 
    database:process.env.DB_DBNAME || 'auth_symbolburn'
})

conn.connect( (err) => { 
if(err){
    console.log(err)
}
else{
    console.log('uraaa')
}
});


const port = process.env.PORT || 3306 ;

app.listen(port, () => {
    console.log('listening at http://localhost:3306');
});



let dbdata;
setInterval(function() {
  conn.query('SELECT * FROM user',(err,result,field)=>{
 dbdata = result;
 //console.log(dbdata);
})

app.get('/', (req , res) => {
    console.log(dbdata);
    res.send(dbdata);
})
}, 100000);



// npm run xxx
// git add ./
// git commit -am '
//  git push
// git log
// git stash
// git push -f origin HEAD^:main 
// npm run start
// Удолить локально коммит 
// git reset HEAD~