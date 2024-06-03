import express from 'express'
const app = express();

app.all('/', (req, res) => {
    console.log('request > ', req);
    console.log('response > ', res);
    res.send('I m up')
});

const port = 4000;
app.listen(port, () => {
    console.log(`serveris running on PORT ${port}`)
})