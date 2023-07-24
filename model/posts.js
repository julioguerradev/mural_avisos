module.exports = {
    posts: [
        {
            id: 0,
            title: 'teste',
            description: 'descrição de Teste' 
        }
    ],

    getAll() {
        return this.posts;
    },

    newPost(title, description){
        this.posts.push({id: generateId(), title, description})
    },

    deletePost(){}
}

function generateId() {
    return Math.random().toString(36).substr(2, 9)
}
