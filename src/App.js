
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

  const ev = () =>{
    console.log("hola");
  }

  

  const ev1 = () =>{
    console.log("Hola")
    x = 2;
  }

  // function a (){
  //   n = 1;
  //   return n;
  // }

  return (
    <div className="containerCard">
      {ev1()}
      <CardLoL 
        nombre= {
          usuarios.map((item)=>
          item.id === x ? item.email : null
          )
        }
        id= {
          usuarios.map((item)=>
          item.id === x ? item.id : null
          )
        }
      />
      <CardLoL/>
      <CardLoL/>
      <CardLoL/>
      <button onClick={ev1}>Random</button>  
    </div>
    
  );
}

export default App;
