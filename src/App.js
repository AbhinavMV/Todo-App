import { Grid } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { ThemeProvider,createMuiTheme } from '@material-ui/core/styles';
import Appbar from './ComponentsOne/Appbar';
import CardItem from './ComponentsOne/CardItem';
import { useEffect } from 'react';

const theme = createMuiTheme({});


const App = () => {
  // const [taskNames,setTaskNames] = useState([]);
  // const count = useSelector((state) => state.counter.count);
  const taskNames = useSelector((state) => state.taskNamesArray)
  
useEffect(()=>{
  // console.log(taskNames)
},[taskNames]);
  

  return (
    <ThemeProvider theme={theme}>
      <Appbar/>
      <Grid container style={{flexGrow:1,alignContent:'center',padding:30}} spacing={2}>
        {taskNames?taskNames.map((task,index)=>(
          <Grid key={index} item xm={12} sm={6} md={4}>
            {console.log(index)}
            <CardItem index={index}/>
          </Grid>
          
        )):<div>
        </div>
      }
        
      </Grid>
    </ThemeProvider>
  );
}

export default App;
