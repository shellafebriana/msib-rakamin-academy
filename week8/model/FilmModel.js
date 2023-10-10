const pool = require("../config/config")

class FilmModel{
    get(callback){
        pool.query("SELECT title, description FROM film ORDER BY film_id ASC",callback)
    }
    getbyId(id, callback){
        var id      = id
        var query   = "SELECT title, description FROM film WHERE film_id = " + id
        pool.query(query,callback)
    }
}

module.exports = FilmModel