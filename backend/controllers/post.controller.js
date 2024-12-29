const PostDAO = require('../models/DAO/PostDAO');
const Post = require('../models/BO/Post');

class PostController {
    static async getAll(req, res) {
        try {
            const posts = await PostDAO.getAll();
            res.status(200).json(posts.map(post => post.toJSON()));
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Erreur serveur.' });
        }
    }

    static async find(req, res) {
        try {
        const posts = await PostDAO.find(req.params.id);
            if (posts) {
                res.status(200).json(posts.toJSON());
            } else {
                res.status(404).json({ error: 'Post non trouvé.' });
            }
        } catch (e) {
            console.error(e);
            res.status(500).json({ error: 'Erreur serveur.' });
        }
    }

    static async create(req, res) {
        try {
            const { content, author, likes } = req.body; // Les données envoyées dans le corps de la requête
            const post = new Post(null, content, author, likes); // Crée un objet Post
            const newPost = await PostDAO.create(post); // Envoie l'objet Post au DAO
            if (newPost) {
                res.status(201).json(newPost.toJSON()); // Retourne l'objet Post créé en JSON
            } else {
                console.log(newPost);
                res.status(400).json({ error: 'Erreur lors de la création du post.' });
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Erreur serveur.' });
        }
    }

    static async update(req, res) {
        try {
            const { content, author, likes} = req.body;
            const id = req.params.id;
            const post = new Post(id, content, author, likes);
            const updatePost = await PostDAO.update(post);
            if (updatePost) {
                res.status(200).json(updatePost.toJSON());
            } else {
                console.log(updatePost);
                res.status(400).json({ error: 'Erreur lors de la modification du post.' });
            }
        } catch (e) {
            console.error(e);
            res.status(500).json({ error: 'Erreur serveur.' });
        }
    }

    static async delete(req, res) {
        try {
            const { content, author, likes} = req.body;
            const id = req.params.id;
            const post = new Post(id, content, author, likes);
            const deletePost = await PostDAO.delete(id);
            if (deletePost) {
                res.status(200).json(deletePost.toJSON());
            } else {
                console.log(deletePost);
                res.status(400).json({ error: 'Erreur lors de la suppression.' });
            }
        } catch (e) {
            console.log(e);
            res.status(400).json({ error: 'Erreur serveur.' });
        }
    }
}

module.exports = PostController;