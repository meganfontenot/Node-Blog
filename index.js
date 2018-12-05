console.log('starting index.js');

const express = require('express');

const server = express();
const PORT = 4100;



//listening
server.listen(PORT, ()=> {
    console.log(`Server is alive at ${PORT}`);
})

