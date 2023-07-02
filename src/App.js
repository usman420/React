import * as React from 'react';
import "./App.css";
import header from './components/header';
import { MuiNavbar } from './components/header';
import Footer from './components/footer'
import ToDoApp from './components/todoApp';
const App =()=>{

  return(
<div >

<MuiNavbar/>
<ToDoApp/>
<Footer/>
</div>
  )
};
export default App;