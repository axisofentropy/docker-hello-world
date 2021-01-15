const express 	= require( 'express' )
const appRouter = express.Router()

appRouter.get( '/*', function( req, res ) {
  res.send( '<h1>Hello world! It is still 2021.</h1>' )
})

module.exports = appRouter
