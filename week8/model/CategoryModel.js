const pool = require("../config/config")

class CategoryModel{
    get(callback){
        pool.query("SELECT name FROM category ORDER BY category_id ASC",callback)
    }
    getbyId(id, callback){
        var id      = id
        var query   = "select f.title, c.name from film_category fc left join film f on fc.film_id = f.film_id left join category c on fc.category_id = c.category_id where fc.category_id =" + id
        pool.query(query,callback)
    }
}

module.exports = CategoryModel