const CategoryModel = require('../model/CategoryModel')
const Category = new CategoryModel()


class CategoryController{
    index(req,res){
        Category.get((err,result) =>{
            if (err) {
                throw err
            }
            res.send(result.rows)
        })
    }
    showFilmbyId(req,res){
        Category.getbyId(req.params.id, (err,result) =>{
            if (err) {
                throw err
            }
            res.send(result.rows)
        })
    }
}

module.exports = CategoryController