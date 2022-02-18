var express = require("express");
var router = express.Router();
var Controllers = require("../controllers");


router.get('/', (req, res) => {

    Controllers.CommentsController.getComments(res);

    // get comments from database
    //getComments(res)

})

router.post('/', (req, res) => {
    
    Controllers.CommentsController.createComment(req.body, res)

    /*console.log('New comment posted')
    console.log('body', req.body)
    let comment = req.body;
    res.send(req.body)*/
    //insertComment(comment, res)
})


module.exports = router;