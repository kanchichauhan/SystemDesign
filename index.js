import express from 'express'
// to parse the data which is in body
import bodyParser from 'body-parser';

const app = express();

// firtly it will execute so that whatever request coming should be parsed before
app.use(bodyParser.json())

app.all('/', (req, res) => {
    // console.log('request > ', req);
    // console.log('response > ', res);
    res.send('I m upnof');
});

const todos = [
    {
        id: '1',
        title: 'task 1',
        completed: false
    },
    {
        id: '2',
        title: 'task 2',
        completed: true
    }
]

// READ
app.get('/todos', (req, res) => {
    res.json(todos)
});

// CREATE - in this case we neeed to send some data (Body)
app.post('/todos', (req, res) => {
    const newTodo = req.body;
    todos.push(newTodo);
    res.json({
        status: 'Success',
        message: 'New Todo Added!'
    })
})

// UPDATE
app.put('/todos/:id', (req, res) => {
    const newTodoData = req.body;
    const todoParamId = req.params.id;

    const todoIndex = todos.findIndex(td => td.id === todoParamId);
    if (todoIndex !== -1) {
        todos[todoIndex] = {
            id: todoParamId,
            ...newTodoData,
        }
    }

    res.json({
        message: 'todo updated successfully'
    })
})

// DELETE
app.delete('/todos/:id', (req, res) => {
    const todoParamId = req.params.id;

    const todoIndex = todos.findIndex(td => td.id === todoParamId);
    if (todoIndex !== -1) {
        todos.splice(todoIndex, 1)
    }

    res.json({
        message: 'todo deleted successfully'
    })
});

// listen to port & execute
const port = 4000;
app.listen(port, () => {
    console.log(`serveris running on PORT ${port}`)
});
