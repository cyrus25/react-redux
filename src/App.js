import React, { Component } from 'react';   //root component
import Ninjas from './Ninjas.js';
import AddNinja from './AddNinja.js';

class App extends Component{

   state={
     ninjas: [
     {name: 'cyrus', age:20, belt: 'black', id: 1},
     {name: 'bhuvan', age:30, belt: 'red', id: 2},
     {name: 'bharat', age:40, belt: 'yellow', id: 3},

     ]
     
   }

   addNinja=(ninja)=>{

       ninja.id=Math.random();
        let ninjas=[...this.state.ninjas,ninja]; //... spread operator  //forming new array and then change state.dot push into state directly.

        this.setState({
          ninjas:ninjas
        })


   }
   deleteNinja=(id)=>{

      let ninjas=this.state.ninjas.filter(ninja=>{   //not altering the state array;  //return the array after removing element with id;
                
        return id !== ninja.id;   //remove element if false is returned

      })    //return new array


      this.setState({
        ninjas:ninjas
      })
       

   }

  render(){

        return(
          <div className="App">


          <h1>My first react App</h1>
          <p>Welcome!</p>
               
           
            <Ninjas deleteNinja={this.deleteNinja} ninjas={this.state.ninjas}/>

            <AddNinja addNinja={this.addNinja} />
          

          </div>
          
         
        );




  }
}





export default App;
