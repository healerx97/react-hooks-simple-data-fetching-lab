// create your App component here
import { useState,useEffect } from "react";
import React from "react";
function App() {
    const[dogData, setDogData] = useState(null)
    useEffect(()=>{
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(res=>res.json())
        .then(data => setDogData(data.message))
    },[])
    if (!dogData) {
        return (
        <p>Loading...</p>
        
    )}
    else {
    return (
        <img src = {dogData} alt="A Random Dog"/>
    )
}
}


export default App