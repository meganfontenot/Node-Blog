console.log('starting index.js');

const express = require('express');
const userDb = require('./data/helpers/userDb');
const postDb = require('./data/helpers/postDb');
const server = express();
const PORT = 5100;
server.use(express.json());


//Handlers
server.get('/users', (req, res) => {
    userDb.get()
        .then((users) => { res.json(users) })
        .catch(err => {
            res
            .status(500)
            .json({ message: "Couldn't fetch users.." })
        });
});

server.get('/posts', (req, res) => {
    postDb.get()
    .then((posts)=>{
        res.json(posts)
    })
    .catch(err => {
        res
        .status(500)
        .json({ message: "Couldn't fetch posts.." })
    });
})

server.get('/posts/:id', (req, res) => {
    const {id} = req.params;
    userDb.getUserPosts(id)
        .then(posts => {
            if(posts) {
                res.json(posts)
            } else {
                res
                .status(404)
                .json({ message: "As awesome as that was.. Maybe search for another?" })
            }
        })
        .catch(err => {
            res
            .status(500)
            .json({ message: "Failed to find any posts." })
        })
});



//listening
server.listen(PORT, ()=> {
    console.log(`Server is alive at ${PORT}`);
});


