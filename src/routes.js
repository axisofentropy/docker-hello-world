const express 	= require( 'express' )
const appRouter = express.Router()

appRouter.get( '/*', function( req, res ) {
  res.send( '<h1>Hello, it\'s still 2021!</h1>' )
})

module.exports = appRouter
