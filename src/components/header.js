import {AppBar ,Toolbar,IconButton ,Typography, Stack} from "@mui/material";
import Button from '@mui/material/Button';
export const MuiNavbar = ()=>{
    return (

        <AppBar position = 'static'>
            <Toolbar>
                <Typography varient= 'h6' component ='div' sx={{flexGrow:1}}>
                    ToDoApp


                </Typography>
                <Stack direction='row' spacing={2}>
                    <Button color='inherit'>Feature</Button>
                    <Button color='inherit'>Today</Button>
                    <Button color='inherit'>MlOPs</Button>
                    <Button color='inherit'>German</Button>
                </Stack>

            </Toolbar>
        </AppBar>
    )
}