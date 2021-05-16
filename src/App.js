import { Grid } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { ThemeProvider,createMuiTheme } from '@material-ui/core/styles';
import Appbar from './Components/Appbar';
import CardItem from './Components/CardItem';
import { useEffect } from 'react';
import { replaceArray } from './Components/redux/taskNamesArraySlice';

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
  },[dispatch])


  return (
    <ThemeProvider theme={theme}>
      <Appbar/>
      <Grid container style={{flexGrow:1,alignContent:'center',padding:30}} spacing={2}>
        {
          taskNames && taskNames.map((task,index)=>(
            <Grid key={index} item xm={12} sm={6} md={3}>
              <CardItem index={index}/>
            </Grid>
          ))
      }    
      </Grid>
    </ThemeProvider>
  );
}

export default App;
