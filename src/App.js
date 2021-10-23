import { useEffect } from 'react';
import React from 'react';

function App() {
  const [status , setStatus] = React.useState(0)
  useEffect(() => {
    fetchAPI()
  }, [])
  
  const fetchAPI = async () => {
    const res = await fetch("https://api.nationalize.io?name=nathaniel", {
   
  }).then ((res) => {
    console.log("Promise Success.", res)
    setStatus(res.status)
  }).catch((err) => {
    console.log("Promise Failed." , err)
  })
  }
  
  return (
    <>
   
    </>
  );
}

export default App;
