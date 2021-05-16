import { Grid } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { ThemeProvider,createMuiTheme } from '@material-ui/core/styles';
import Appbar from './ComponentsOne/Appbar';
import CardItem from './ComponentsOne/CardItem';
import { useEffect, useState } from 'react';
import { replaceArray } from './ComponentsOne/redux/taskNamesArraySlice';

const theme = createMuiTheme({});

const App = () => {
  const taskNames= useSelector((state)=> state.taskNamesArray.tasks)
  const dispatch = useDispatch()
  useEffect(()=>{
    let arr = localStorage.getItem("tasks")
    if(arr){
      let obj = JSON.parse(arr)
      dispatch(replaceArray(obj))
    }
  },[])


  return (
    <ThemeProvider theme={theme}>
      <Appbar/>
      <Grid container style={{flexGrow:1,alignContent:'center',padding:30}} spacing={2}>
        {console.log('rend'+taskNames),
          taskNames && taskNames.map((task,index)=>(
            <Grid key={index} item xm={12} sm={6} md={4}>
              {console.log(index)}
              <CardItem index={index}/>
            </Grid>
          ))
      }    
      </Grid>
    </ThemeProvider>
  );
}

export default App;
