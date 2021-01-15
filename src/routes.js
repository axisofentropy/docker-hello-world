const express 	= require( 'express' )
const appRouter = express.Router()

appRouter.get( '/*', function( req, res ) {
  res.send( '<h1>Hello from 2021!</h1>' )
})

module.exports = appRouter
