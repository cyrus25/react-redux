import React from 'react';




    const Ninjas = ({ninjas,deleteNinja}) =>{

       // console.log(this.props);
      //const { name, age } = this.props;  for class component
     // const {ninjas} = props; for u/function component

     
      const ninjaList = ninjas.map(ninja => {
              
        return(
            <div className="ninja" key={ninja.id}>

            <div>Name= {ninja.name}</div>
            <div>Age= {ninja.age}</div>
            <button onClick={() => {deleteNinja(ninja.id)}}>Delete Ninja</button>  



          </div>


        )



      })
       return(

        <div className="ninjaList">
            {ninjaList }
        </div>
         


       )

          

     }


export default Ninjas;