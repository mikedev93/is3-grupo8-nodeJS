import express from 'express';

const app = express();

app.use(express.static('revision1'));

app.listen(3000, () => {
    console.log('Running server on port 3000')
})