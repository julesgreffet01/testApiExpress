class Post {
    constructor(id, content, author, likes = []) {
        this.id = id;
        this.content = content;
        this.author = author;
        this.likes = likes;
    }

    toJSON() {
        return {
            id: this.id,
            content: this.content,
            author: this.author,
            likes: this.likes,
        };
    }
}

module.exports = Post;
