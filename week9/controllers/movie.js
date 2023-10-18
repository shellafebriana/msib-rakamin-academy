const { Movie } = require('../models')

class MovieController{
    static index(req, res, next){
        Movie.findAll()
            .then( data => {
                res.render('movie/movie', {
                    title : 'Movie',
                    layout : 'layouts/main-layout',
                    data
                })
            })
            .catch(err => {
                res.render('error-page', {
                    title : 'Error Page!',
                    layout : 'layouts/main-layout',
                    status : 500,
                    message : 'Something went wrong',
                    error : err
                })
            })
    }
    
    static detail(req, res, next){
        Movie.findOne({
            where  : {
                id : req.params.id
            }
        })
        .then( data =>{
            if(!data){
                res.render('error-page', {
                    title : 'Error Page!',
                    layout : 'layouts/main-layout',
                    status : 404,
                    message : 'Movies not found',
                    error :''
                })
            }else{
                res.render('movie/detail', {
                    title : 'Detail Movie',
                    layout : 'layouts/main-layout',
                    data
                })
            }
        })
        .catch(err => {
            res.render('error-page', {
                title : 'Error Page!',
                layout : 'layouts/main-layout',
                status : 500,
                message : 'Something went wrong',
                error : err
            })
        })
    }

    static create(req,res,next){
        const info = {
            title : req.body.title,
            genres : req.body.genres,
            year : req.body.year,
            createdAt : new Date(),
            updatedAt : new Date()
        }
        Movie.create(info)
        .then(res.redirect('/movie'))
        .catch(err => {
            res.render('error-page', {
                title : 'Error Page!',
                layout : 'layouts/main-layout',
                status : 500,
                message : 'Something went wrong',
                error : err
            })
        })
    }

    static delete(req, res, next){
        
    }
}

module.exports = MovieController