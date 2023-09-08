import React, {Component} from 'react';
import '../css/App.css';
import Navbar from './Navbar';
import BarChart from './Visulization';
import Button from '@material-ui/core/Button'; 
import LinePlot from './Visulization';
class App extends Component {
  render(){
    return (
    <div className="App"> 
      <Navbar />
        <br />
        <BarChart />
    </div>
      
    ); 
  }
   
}
  
export default App;