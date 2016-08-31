// require express and other modules
var express = require('express'),
    app = express(),
    bodyParser = require('body-parser');

// configure bodyParser (for receiving form data)
app.use(bodyParser.urlencoded({ extended: true }));

// serve static files from public folder
app.use(express.static(__dirname + '/public'));

/************
 * DATABASE *
 ************/

// our database is an array for now with some hardcoded values
var todos = [
   { _id: 7, task: 'Laundry', description: 'Wash clothes' },
   { _id: 27, task: 'Grocery Shopping', description: 'Buy dinner for this week' },
   { _id: 44, task: 'Homework', description: 'Make this app super awesome!' }
];

/**********
 * ROUTES *
 **********/

/*
 * HTML Endpoints
 */

 app.get('/', function homepage(req, res) {
   res.sendFile(__dirname + '/views/index.html');
 });


/*
 * JSON API Endpoints
 *
 * The comments below give you an idea of the expected functionality
 * that you need to build. These are basic descriptions, for more
 * specifications, see the todosTest.js file and the outputs of running
 * the tests to see the exact details. BUILD THE FUNCTIONALITY IN THE
 * ORDER THAT THE TESTS DICTATE.
 */

app.get('/api/todos/search', function search(req, res) {
  /* This endpoint responds with the search results from the
   * query in the request. COMPLETE THIS ENDPOINT LAST.
   */

});

app.get('/api/todos', function index(req, res) {
  res.status(200).json({todos});
  // console.log(statusCode);
  /* This endpoint responds with all of the todos
   */
});

app.post('/api/todos', function create(request, res) {
    var id = todos[todos.length-1]._id+1;
    var task = request.body.task;
    var description = request.body.description;
    var newTodo = {_id : id, task: task, description: description};

     todos.push(newTodo);
     res.json(newTodo);
});
    // req.body(newTodo);
    // return res.json(newTodo);

  /* This endpoint will add a todo to our "database"
   * and respond with the newly created todo.
   POST /api/todos (create)
     ✓ should respond with status 200 - Success
     ✓ should respond with JSON
     ✓ should respond with the new todo object
     ✓ should assign an _id to the new todo object
     ✓ should increment the _id number by one each time a todo is created
   */


app.get('/api/todos/:id', function show(req, res) {
      console.log(req.params)
      var inputs = parseInt(req.params.id);

      var result = todos.filter(function(todo){return todo._id == inputs})[0];

      return res.json(result);
});

      // res.json({todos}).find(function(todos){
      //   return todos.find._id[0];
      // })
    //  res.status(200).json({todos}).find.id[1];
  // res.status(200).json({todos})._id[todos];

  /* This endpoint will return a single todo with the
   * id specified in the route parameter (:id)
   */


app.put('/api/todos/:id', function update(req, res) {
  /* This endpoint will update a single todo with the
   * id specified in the route parameter (:id) and respond
   * with the newly updated todo.
   */
});

app.delete('/api/todos/:id', function destroy(req, res) {
  /* This endpoint will delete a single todo with the
   * id specified in the route parameter (:id) and respond
   * with success.
   */
});

/**********
 * SERVER *
 **********/

// listen on port 3000
var port = 3000
app.listen(port, function() {
  console.log('Server running on http://localhost:3000');
});
