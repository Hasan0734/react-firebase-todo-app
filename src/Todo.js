import { List, ListItem, ListItemAvatar, ListItemText, Modal } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import DeleteForeverSharpIcon from '@material-ui/icons/DeleteForeverSharp';
import React, { useState } from 'react';
import db from './firebase';
import './Todo.css';

const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));

function Todo(props) {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [input, setInput] = useState();
     
    const handleClose = ()=> {
        setOpen(true);
    }
    const updateTodo = ()=> {
        //update the todo with the ne input test
        db.collection('todos').doc(props.todo.id).set({atodo: '123'}, {marge: true});
        setOpen(false);
    }
    return (
      
        <React.Fragment>
        <Modal
            open={open}
            onClose={e=> setOpen(false)}
        >
            <div className={classes.paper}>
                <h1>I am a modal</h1>
                <input placeholder={props.todo.todo} value={input} onChange={event => setInput(event.target.value)} />
                <button
                
                onClick={e => setOpen(false)}>UPDATE TODO</button>
            </div>
        </Modal>
        <List className="todo_list">
            <ListItem>
                <ListItemAvatar>
                   
                </ListItemAvatar>
                <ListItemText primary={props.todo.todo} secondary='Dummy deadline ⏰ '/>
            </ListItem>
            <button onClick={e => setOpen(true)}>Edit</button>
            <DeleteForeverSharpIcon onClick={event => db.collection('todos').doc(props.todo.id).delete()} />
          
        </List>
        </React.Fragment>
    )
}

export default Todo;
