const express = require('express')
const router = require('./router/mainRouter')
const  mongoose   = require('./model/mongoose')
const session = require('express-session');
const cookieParser = require('cookie-parser');
const app = express()
app.use(session({
    secret: 'your-secret-key', 
    resave: false, 
    saveUninitialized: true,
    cookie: { secure: false }
  }));
app.use(cookieParser());
app.set('view engine','ejs')
app.use(express.urlencoded({extended:true}))


/*for clearing cache with all request */
app.use((req, res, next) => {
  res.set('Cache-Control', 'no-store, no-cache, must-revalidate, private');
  res.set('Pragma', 'no-cache');
  res.set('Expires', '-1');
  next();
});



app.use('/',router)

app.listen(4000,()=>{
    console.log('server  listening on 4000')
})