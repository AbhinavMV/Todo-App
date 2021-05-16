import { AppBar, Button, Toolbar, Typography } from '@material-ui/core';
import ListIcon from '@material-ui/icons/List';
import { useDispatch } from 'react-redux';
import { useStyles } from '../AppStyle';
import ModalUI from './ModalAddTask'
import { toggle } from './redux/OpenSlice';
const Appbar = () => {
    const classes = useStyles();
    const dispatch = useDispatch()
    return (
        <>
        <AppBar position="static">
            <Toolbar>
                <ListIcon/>
                <Typography variant="h6" className={classes.title}>
                    TODO App
                </Typography>
                <Button color="inherit" onClick={()=>{dispatch(toggle())}}>Create Task</Button>
                <ModalUI/>
            </Toolbar>
        </AppBar>
        </>
    )
}

export default Appbar;
