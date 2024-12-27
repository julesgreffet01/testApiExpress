const connection = require('../../config/bd');
const Post = require('../BO/Post');

class PostDAO {
    static async getAll() {
        const client = await connection();
        try {
            const query = "Select * from posts;";
            const { rows } = await client.query(query);
            return rows.map(row => new Post(row.id, row.content, row.author, row.likes || []));
        } finally {
            client.release();
        }
    }

    static async find (id) {
        const client = await connection();
        try {
            const query = "Select * from posts where id = $1";
            const { rows } = await client.query(query, [id]);
            if (rows.length > 0) {
                const row = rows[0];
                return new Post(row.id, row.content, row.author, row.likes || []);
            }
            return null;
        } finally {
            client.release();
        }
    }

    static async create(post){
        const client = await connection();
        try {
            const { content, author, likes } = post;
            const query = "insert into posts (content, author, likes) values ($1, $2, $3) RETURNING *;";
            const { rows } = await client.query(query, [content, author, likes]);
            if (rows.length > 0) {
                const row = rows[0];
                return new Post(row.id, row.content, row.author, row.likes || []);
            }
            return null;
        } finally {
            client.release();
        }
    }

    static async update(post){
        const client = await connection();
        try {
            const { content, author, likes, id } = post;
            const query = "update posts set content=$1, author = $2, likes = $3 where id =$4 RETURNING *;";
            const { rows } = await client.query(query, [content, author, likes, id]);
            if (rows.length > 0) {
                const row = rows[0];
                return new Post(row.id, row.content, row.author, row.likes || []);
            }
            return null;
        } finally {
            client.release();
        }
    }

    static async delete(id){
        const client = await connection();
        try {
            const query = "delete from posts where id = $1 returning *";
            const { rows } = await client.query(query, [id]);
            if (rows.length > 0) {
                const row = rows[0];
                return new Post(row.id, row.content, row.author, row.likes || []);
            }
            return null;
        } finally {
            client.release();
        }
    }
}

module.exports = PostDAO;
