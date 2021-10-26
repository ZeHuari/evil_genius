
import { useEffect , useState } from 'react';
import './App.css';
import CardLoL from './components/CardLoL';


function App() {

  const [usuarios, setUsuarios] = useState([]);
   


  useEffect(() => {
      fetchData()
  }, [])

  const fetchData = async () => {
      const data = await fetch ("https://jsonplaceholder.typicode.com/users");
      const users = await data.json();
      setUsuarios(users)
  }

  let x = 0;


  
  const random = (min, max) =>{
          return Math.floor((Math.random() * (max - min + 1)) + min);
      }

  const ev1 = () =>{
    x = random (1,10);
    console.log("Hola")
  }



  return (
    <div className="containerCard">
      {ev1()}
      <CardLoL 
        nombre= {
          usuarios.map((item)=>
          item.id === x ? item.name : null
          )
        }
        id= {
          usuarios.map((item)=>
          item.id === x ? item.id : null
          )
        }
      />
      {ev1()}
      <CardLoL
      nombre= {
        usuarios.map((item)=>
        item.id === x ? item.name : null
        )
      }
      id= {
        usuarios.map((item)=>
        item.id === x ? item.id : null
        )
      }
      />
      {ev1()}
      <CardLoL
      nombre= {
        usuarios.map((item)=>
        item.id === x ? item.name : null
        )
      }
      id= {
        usuarios.map((item)=>
        item.id === x ? item.id : null
        )
      }
      />{ev1()}
      <CardLoL
      nombre= {
        usuarios.map((item)=>
        item.id === x ? item.name : null
        )
      }
      id= {
        usuarios.map((item)=>
        item.id === x ? item.id : null
        )
      }
      
      />
      {ev1()}
      <CardLoL
      nombre= {
        usuarios.map((item)=>
        item.id === x ? item.name : null
        )
      }
      id= {
        usuarios.map((item)=>
        item.id === x ? item.id : null
        )
      }
      />
       
    </div>
    
  );
}

export default App;
