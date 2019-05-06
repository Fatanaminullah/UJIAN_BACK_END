const router = require('express').Router();
const connect = require('../connection/connection')


//add connection
router.post('/moviecategory/add', (req,res) => {
    var sql = `INSERT INTO movcat SET ?`;
    var sql2 = `SELECT m.nama AS NAMA_MOVIE, c.nama AS NAMA_CATEGORY FROM movcat mc JOIN movies m ON mc.movie_id = m.id JOIN categories c ON mc.category_id = c.id`;
    var data = req.body

    connect.query(sql, data, (error,result) => {
        if(error) return res.send(error.sqlMessage)
        
        connect.query(sql2, (error,result) => {
            if(error) return res.send(error.sqlMessage)

            res.send(result)
        })

    })
})
//delete connection
router.delete('/moviecategory/delete/:id',(req,res) => {
    var sql = `DELETE FROM movcat WHERE id = ?`
    var sql2 = `SELECT m.nama AS NAMA_MOVIE, c.nama AS NAMA_CATEGORY FROM movcat mc JOIN movies m ON mc.movie_id = m.id JOIN categories c ON mc.category_id = c.id`;
    var data = req.params.id

    connect.query(sql, data, (error,result) => {
        if(error) return res.send(error.sqlMessage)
        
        connect.query(sql2, (error,result) => {
            if(error) return res.send(error.sqlMessage)

            res.send(result)
        })

    })
})
//show all connection
router.get('/moviecategory', (req,res) => {
    var sql = `SELECT m.nama AS NAMA_MOVIE, c.nama AS NAMA_CATEGORY FROM movcat mc JOIN movies m ON mc.movie_id = m.id JOIN categories c ON mc.category_id = c.id`;

    connect.query(sql, (error,result) => {
        if(error) return res.send(error.sqlMessage)

        res.send(result)
    })
})

module.exports = router