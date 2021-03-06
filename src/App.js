import { Button, FormControl, Input, InputLabel } from "@material-ui/core";
import firebase from "firebase";
import React, { useEffect, useState } from "react";
import "./App.css";
import db from "./firebase";
import Todo from "./Todo";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  //when the ap loads, we need to listen to the database and fetch new todos as they get add/romoved
  useEffect(() => {
    //this code here... fires when the app loads
    db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      // console.log(snapshot.docs.map(doc=> doc.data()))
      setTodos(snapshot.docs.map(doc=> ({id: doc.id, todo:doc.data().todo})));
    })
  }, []);

  const addTodo = (event) => {
    // this will of when we click the button
    event.preventDefault(); //will stop the REFRESH
    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    
    setInput(""); //clear up the input after clicking add todo button
  };
  return (
    <div className="App">
      <h1>Hello world</h1>
      <form>
        <FormControl>
          <InputLabel> Write a Todo</InputLabel>
          <Input
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
        </FormControl>

        <Button
          disabled={!input}
          type="submit"
          onClick={addTodo}
          variant="contained"
          color="primary"
        >
          Add Todo
        </Button>
      </form>
      <ul>
        {todos.map((todo) => (
          <Todo todo={todo}></Todo>
        ))}
      </ul>
    </div>
  );
}

export default App;
