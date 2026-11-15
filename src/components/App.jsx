import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([])

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function displayToys() {
    fetch("http://localhost:3001/toys")
      .then((response => {
        if (!response.ok) {
          throw new Error("Sorry could not fetch toy")
        }
        else {
          return response.json()
        }
      }))
      .then((toys) => { setToys(toys) })
      //console.log(toys)})
      .catch((error) => { console.error("Ooops a problem occured:", error) })

  }

  useEffect(() => {
    displayToys()

  }, [])

  function handleNewToy(newToy) {
    setToys([...toys, newToy])

  }

  function handleDeleteToy(id) {

    fetch(`http://localhost:3001/toys/${id}`,{
       method: "DELETE"
    })
      .then(response => {
        if (!response.ok) {
          throw new Error("Failed to delete toy");
        }
        return response.json();
      })
      .then (() => {
        setToys((currentToys) =>
          currentToys.filter((toy) => toy.id !== id)
        );
      })
      .catch(error => {
        console.error("Error deleting toy:", error);
      });
  }


  return (
    <>
      <Header />
      {showForm ? <ToyForm onCreateNewToy={handleNewToy} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={toys} 
                    onDonate={handleDeleteToy}
      />
    </>
  );
}

export default App;
