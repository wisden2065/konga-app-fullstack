const express = require('express');
const cors = require('cors');

const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const session = require('express-session')  //creates a middleware function----const fn session(options){ return function(req, res, next){next()}}
// const salt = 10;
const UserRoutes = require('./routes/users.js')
const ProductRoutes = require('./routes/products.js')
const AuthRoutes = require('./routes/auth.js')
const cartItemsRoute = require('./routes/cart.js')

const server = express();
    
// register the middleware functions- Hey express, save this middleware
server.use((req, res, next)=>{
    console.log('A request has been made to the server...')
    next()
})

// we can override/relax CORS Policy using the CORS middleware
server.use(cors({
    origin:'http://localhost:5173', credentials:true
}))

server.use(cookieParser())

// setting up middlewares
server.use(express.json());


// the express-session middleware stores the current user's session data on the server
// Since it uses in-memory(RAM) -session data is lost when server is restarted
// data saved in express-session is on the run time
// express-session is not suitable for production
// ***The session middleware will
// ----checks the req header---looks for cookies, uses it if it finds out one else creates a new session-cookie
//  ---Hey i am going to create A session{id:{ session data }}
server.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: false,
        maxAge: 100 * 60 * 60 * 24
    },
    name:'s3cur3'  //this name key is the cookie id, if not set defaults to connection.sid
}))


const PORT = 8000;   
// users route
server.use('/users', UserRoutes)

// products route
server.use('/products', ProductRoutes)

// login / signup
server.use('/auth', AuthRoutes)

server.use('/cart', cartItemsRoute)

// server.all('/', ()=>{
//     console.log('A response has been sent to client')
// })
server.listen(PORT, ()=>{
    console.log(`Server started at http://localhost:${PORT}`)
})  