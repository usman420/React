

import React ,{useState} from 'react';
import "../App.css"
import Card from '@mui/material/Card';
import { Grid } from '@mui/material';
import Box from '@mui/material/Box';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { blue } from '@mui/material/colors';

const list =[
  {name:"learn Python"},
  {name:"Go to Gym"},{name:"Learn Linux"},{name:"Learn TS"}
]
const Handle =({data,updateData})=>{
  const [proxy,updateProxy] =useState("")
  const handlesubmit =(e)=>{
  
    e.preventDefault();
  const input = proxy
  console.log(input)
  updateData([...data,{name:input}] )
  updateProxy("")
  }
  console.log(data)
  return(
    <div><form onSubmit = {handlesubmit}>
    <input class='input' type= "text" value ={proxy} onChange = {e=>updateProxy(e.target.value)}/>
    </form></div>
  )
  }
const ToDoApp = ()=>{
  const [data,updateData] =  useState(list)
  //const [isClicked, setIsClicked] = useState(false);
  const [isClicked, setIsClicked] = useState(Array(data.length).fill(false));
  const complete = (index) => {
    const newClickedState = [...isClicked];
    newClickedState[index] = !newClickedState[index];
    setIsClicked(newClickedState);
  };
  
const onDelete=(index)=>{
  const updatedTodos = [...data];
  updatedTodos.splice(index, 1);
  updateData(updatedTodos);

}
  
  return(
    <div>
    <Grid container spacing={3}>
      {data.map((content, index) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
          <Card sx={{ maxWidth: 345,backgroundColor:'#bbdefb',border: ' solid 10px' }}
           className={isClicked[index] ? 'opaque-card' : ''}
          >
            <CardMedia
              sx={{ height: 70 }}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {content.name}
              </Typography>
            </CardContent>
            <CardActions>
            <Button size="small" onClick={() => complete(index)}>Done</Button>

              <Button size="small"onClick={()=> onDelete(index)}>Delete</Button>
                
            </CardActions>
          </Card>
          
        </Grid>
      ))}
    </Grid>
    <Handle data={data} updateData={updateData} />
  </div>
);
};

export default ToDoApp;
