const router = require('express').Router();
const connect = require('../connection/connection')

//add movies
router.post('/movies/add', (req,res) => {
    var sql = `INSERT INTO movies SET ?`;
    var sql2 = `SELECT * FROM movies`;
    var data = req.body

    connect.query(sql,data, (error,result) => {
        if(error) return res.send(error.sqlMessage)
        
        connect.query(sql2, (error,result) => {
            if(error) return res.send(error.sqlMessage)

            res.send(result)
        })
    })
})
//edit movies
router.patch('/movies/edit/:idmovies', (req,res) => {
    var data = [req.body, req.params.idmovies]
    var sql = `UPDATE movies SET ? WHERE id = ?`
    var sql2 = `SELECT * FROM movies`

    connect.query(sql, data, (error,result) => {
        if(error) return res.send(error.sqlMessage)
        
        connect.query(sql2, (error,result) => {
            if(error) return res.send(error.sqlMessage)

            res.send(result)
        })

    })
})
//delete movies
router.delete('/movies/delete/:idmovies', (req,res) => {
    var sql = `DELETE FROM movies WHERE id = ?`
    var sql2 = `SELECT * FROM movies`
    var data = req.params.idmovies

    connect.query(sql, data, (error,result) => {
        if(error) return res.send(error.sqlMessage)
        
        connect.query(sql2, (error,result) => {
            if(error) return res.send(error.sqlMessage)

            res.send(result)
        })

    })

})
//show all movies
router.get('/movies', (req,res) => {
    var sql = `SELECT * FROM movies`

    connect.query(sql, (error,result) => {
        if(error) return res.send(error.sqlMessage)

        res.send(result)
    })
})



module.exports = router
