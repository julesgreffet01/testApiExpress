const express = require('express');
const router = express.Router()

router.get('/', (req, res) => {
    res.json({message : 'les données'});
})

router.post('/', (req, res) => {
    res.json({message : req.body.message});
})

router.put('/:id', (req, res) => {
    res.json({message : req.params.id});
})

router.delete('/:id', (req, res) => {
    res.json({message : "delete de "+req.params.id});
})

router.patch('/like-post/:id', (req, res) => {
    res.json({message : "le post numero "+req.params.id + " est liké"});
})

router.patch('/dislike-post/:id', (req, res) => {
    res.json({message : "le post numero "+req.params.id + " est disliké"});
})

module.exports = router;