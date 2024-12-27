const express = require('express');
const router = express.Router()
const Controller = require('../controllers/post.controller')


router.get('/', Controller.getAll);
router.get('/:id', Controller.find);

router.post('/', Controller.create);

router.put('/:id', Controller.update);

router.delete('/:id', Controller.delete)

router.patch('/like-post/:id', (req, res) => {
    res.json({message : "le post numero "+req.params.id + " est liké"});
})

router.patch('/dislike-post/:id', (req, res) => {
    res.json({message : "le post numero "+req.params.id + " est disliké"});
})

module.exports = router;