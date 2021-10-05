import { useState, useEffect } from 'react'
import Header from "./components/Header";
import AddZipCode from "./components/AddZipCode";

const App = () => {

  const addZipCode = (zipCode) => {
    console.log(zipCode)
  }

  return (
    <div className="background">
      <div className="container">
        <Header />
        <AddZipCode onAdd={addZipCode} />
      </div>
    </div>
  );
}

export default App;
