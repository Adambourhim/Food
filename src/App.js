import React , {useEffect , useState} from 'react';
import './App.css';

function App() {
 

const APP_ID = "33f9816c" ;
const APP_KEY = "c0868fa8eeb658ee8638dfdfbf70cf2e" ;
//const ExempleReq = `https://api.edamam.com/api/nutrition-details?app_id=${33f9816c}&app_key=${c0868fa8eeb658ee8638dfdfbf70cf2e}`;

const [info,setInfo] = useState ([]) ;
const [loading,setLoading] = useState (true) ;


useEffect ( () => {
  corona();
},[]) ;

const corona = async () => {
  const response = await fetch ("https://api.edamam.com/api/nutrition-details?app_id=46c62328c&app_key=2a7ff77d23cea975370283ca1ef3cab9");
  const data = await response.json();
  
  console.log(data);
};


  return (
    <div className="App">
      
      
    </div>
  );
}

export default App;
