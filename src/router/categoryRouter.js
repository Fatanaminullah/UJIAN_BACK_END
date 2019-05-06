const router = require('express').Router();
const connect = require('../connection/connection')

//add category
router.post('/categories/add', (req,res) => {
    var sql = `INSERT INTO  categories SET ?`;
    var sql2 = `SELECT * FROM categories`;
    var data = req.body

    connect.query(sql,data, (error,result) => {
        if(error) return res.send(error.sqlMessage)
        
        connect.query(sql2, (error,result) => {
            if(error) return res.send(error.sqlMessage)

            res.send(result)
        })
    })
})
//edit category
router.patch('/categories/edit/:idcategory', (req,res) => {
    var data = [req.body, req.params.idcategory]
    var sql = `UPDATE categories SET ? WHERE id = ?`
    var sql2 = `SELECT * FROM categories`

    connect.query(sql, data, (error,result) => {
        if(error) return res.send(error.sqlMessage)
        
        connect.query(sql2, (error,result) => {
            if(error) return res.send(error.sqlMessage)

            res.send(result)
        })

    })
})
//delete category
router.delete('/categories/delete/:idcategory', (req,res) => {
    var sql = `DELETE FROM categories WHERE id = ?`
    var sql2 = `SELECT * FROM categories`
    var data = req.params.idcategory

    connect.query(sql, data, (error,result) => {
        if(error) return res.send(error.sqlMessage)
        
        connect.query(sql2, (error,result) => {
            if(error) return res.send(error.sqlMessage)

            res.send(result)
        })

    })

})
//show all categories
router.get('/categories', (req,res) => {
    var sql = `SELECT * FROM categories`

    connect.query(sql, (error,result) => {
        if(error) return res.send(error.sqlMessage)

        res.send(result)
    })
})

module.exports = router