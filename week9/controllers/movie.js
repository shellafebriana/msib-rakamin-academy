const { Movie } = require('../models')

class MovieController{
    static index(req, res, next){
        let p = 0
        let l = 10
        
        let page = parseInt(req.query.page)

        const offset = page ? page * l : p

        Movie.findAndCountAll({limit : l, offset : offset, order: [['id', 'DESC']]})
            .then( data => {
                const totalPages = Math.ceil(data.count / l)
                res.render('movie/movie', {
                    title : 'Movie',
                    layout : 'layouts/main-layout',
                    data : {
                        "totalPages" : totalPages,
                        "limit" : l,
                        "currentPage" : page,
                        "currentPageSize" : data.rows.length,
                        "movies" : data.rows
                    }
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
        // res.send('delete')
        Movie.destroy({
            where : {
                id : req.params.id
            }
        })
        .then(res.redirect('/movie?_method=GET'))
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

    static editForm(req, res, next){
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
                res.render('movie/edit', {
                    title : 'Edit Movie',
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

    static edit(req, res, next){
        const info = {
            title : req.body.title,
            genres : req.body.genres,
            year : parseInt(req.body.year),
            updatedAt : new Date()
        }
        Movie.update(info, {
            where: {
              id:req.body.id
            }
          })
        .then(res.redirect('/movie?_method=GET'))
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
}

module.exports = MovieController