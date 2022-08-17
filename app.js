const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Files = require('edacy-files-walk');
require('dotenv').config();
const {DB_USERNAME, DB_PASS, NODE_DEV, PORT} = process.env
const {graphqlHTTP} = require('express-graphql')
app.use(express.json())

const cors = require('cors')
app.use(cors({
  origin: ['http://localhost:4200'],
  "methods": "GET,PUT,POST, DELETE, PATCH, HEAD",
  "preflightContinue": false,
  "optionsSuccessStatus": 204,
  credentials: true
}));

//graphql
// app.use('/graphql', graphqlHTTP({
//   schema: schema,
//   rootValue: root,
//   graphiql: true,
// }));

mongoose.connect(process.env.DB_URL)
         .then((result)=>{
          console.log('App is connect to atlas db')
          initApp()
         })
         .catch((error)=>{
          console.log('Error when connecting to db \n', + error)
         });
 function initApp(){
  require('./api/modules/classes/classes.routes')(app)
  require('./api/modules/students/students.routes')(app)
          
          
          app.listen(PORT,()=>{
            console.log('server listening')
          })  
        
}