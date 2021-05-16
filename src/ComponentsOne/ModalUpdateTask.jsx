import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import {  Button, TextareaAutosize, TextField } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { setDescription } from './redux/TaskDescriptionSlice';
import { setName } from './redux/TaskNameSlice';
import {  replaceArray, setTasksArray } from './redux/taskNamesArraySlice';
import { updateItem } from './redux/OpenSlice';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    width:'40%',
    height:'40%',
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function ModalUpadteTask({index}) {
  const classes = useStyles();
  const edit = useSelector((state)=>state.open.edit)
  const tName = useSelector((state)=>state.taskName.name)

  const tDescription = useSelector((state)=>state.taskDescription.description)
  const dispatch = useDispatch();
  const taskNames = useSelector((state) => state.taskNamesArray.tasks)


  const handleSubmit = () =>{
      dispatch(updateItem());
      let obj = {'name':tName,'description':tDescription,'date':new Date().toLocaleString()}
      let tempArray = [...taskNames,obj];
      tempArray.splice(index,1)
      dispatch(replaceArray(tempArray))
      localStorage.setItem('tasks',JSON.stringify(tempArray))
      dispatch(setName(''))
      dispatch(setDescription(''))
  }

  return (
    <div className={classes.modal}>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={edit}
      >
          <div className={classes.paper}>
            <h2 id="transition-modal-title">Update Task</h2>
            <form noValidate autoComplete="off">
                <TextField id="outlined-basic" label="Task Name" variant="outlined" onChange={(e)=>dispatch(setName(e.target.value))} value={tName}/><br/>
                <TextareaAutosize onChange={(e)=>dispatch(setDescription(e.target.value))} value={tDescription} style={{marginTop:20,width:'100%',height:'100%',overflowY:'auto'}} rowsMin={5}  placeholder="Task Description" /> 
                <Button style={{flexFlow:'row-reverse'}} onClick={handleSubmit} variant="contained" color="primary">Update</Button>
            </form>
          </div>
      </Modal>
    </div>
  );
}
