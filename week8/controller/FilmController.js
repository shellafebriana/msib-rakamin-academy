const FilmModel = require('../model/FilmModel')
const Film = new FilmModel()


class FilmController{
    index(req,res){
        Film.get((err,result) =>{
            if (err) {
                throw err
            }
            res.send(result.rows)
        })
    }
    showbyId(req,res){
        Film.getbyId(req.params.id, (err,result) =>{
            if (err) {
                throw err
            }
            res.send(result.rows)
        })
    }
}

module.exports = FilmController