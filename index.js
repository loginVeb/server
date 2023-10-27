import { createConnection } from 'mysql';
import express from 'express';
import cors from 'cors';


const app = express();
app.use(cors());

const conn = createConnection({
    host:process.env.DB_HOST , 
    user:process.env.DB_USERNAME, 
    password:process.env.DB_PASSWORD , 
    database:process.env.DB_DBNAME 
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
  conn.query('SELECT * FROM user',(err,result,field)=>{
 dbdata = result;
 //console.log(dbdata);
})

app.get('/', (req , res) => {
   // console.log(dbdata);
    res.send(dbdata);
    res.end();
})




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