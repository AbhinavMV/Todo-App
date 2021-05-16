import { AppBar, Toolbar, Typography } from '@material-ui/core';
import ListIcon from '@material-ui/icons/List';
import { useStyles } from '../AppStyle';
import ModalUI from './ModalUI'
const Appbar = () => {
    // const [open,setOpen] = useState(false)
    const classes = useStyles();

    return (
        <>
        <AppBar position="static">
            <Toolbar>
                <ListIcon/>
                <Typography variant="h6" className={classes.title}>
                    TODO App
                </Typography>
                
                <ModalUI/>
            </Toolbar>
        </AppBar>
        </>
    )
}

export default Appbar;
