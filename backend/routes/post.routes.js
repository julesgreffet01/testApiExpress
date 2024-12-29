const express = require('express');
const router = express.Router()
const Controller = require('../controllers/post.controller')


router.get('/', Controller.getAll);

router.get('/:id', Controller.find);

router.post('/', Controller.create);

router.put('/:id', Controller.update);

router.delete('/:id', Controller.delete)

router.patch('/like-post/:id', Controller.likePost)

router.patch('/dislike-post/:id', Controller.dislikePost)

module.exports = router;