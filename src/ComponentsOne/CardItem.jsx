import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { CardHeader, IconButton } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { useDispatch, useSelector } from 'react-redux';
import { replaceArray } from './redux/taskNamesArraySlice';
import { setName } from './redux/TaskNameSlice';
import { setDescription } from './redux/TaskDescriptionSlice';
import ModalUI from './ModalUI';
import { toggle } from './redux/CounterSlice';
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },


});

export default function CardItem({index}) {
    const classes = useStyles();
    const taskNames = useSelector((state) => state.taskNamesArray)
    // const tName = useSelector((state)=>state.taskName.name)
    // const tDescription = useSelector((state)=>state.taskDescription.description)
    const dispatch = useDispatch()
    const handleDelete=()=>{
        let tempArr = [...taskNames]
        console.log(tempArr.splice(index,1));
        console.log(tempArr);
        dispatch(replaceArray(tempArr))
        window.location.reload()
    }

    const handleEdit=()=>{
        dispatch(setName(taskNames[index]['name']))
        dispatch(setDescription(taskNames[index]['name']))
        dispatch(toggle())
    }

  return (
    <Card index={index} className={classes.root}>
      <CardActionArea>
          <CardHeader
            title={taskNames[index]['name']}
            subheader={taskNames[index]['date']}
          />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {taskNames[index]['description']}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions  style={{flexFlow:'row-reverse'}}>
        <IconButton edge='start' onClick={handleDelete}>
            <DeleteIcon/>
        </IconButton>
        <IconButton edge='start' onClick={handleEdit}>
            <EditIcon/>
        </IconButton>
      </CardActions>
    </Card>
  );
}
