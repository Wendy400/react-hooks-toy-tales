import React, {useState} from "react";

function ToyForm({onCreateNewToy}) {
const [formData, setFormData] = useState({
    name: "",
    image: "",   
  });

const [likes, setLikes] = useState(0) 


  function handleChange(event) {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value
    });
  }

  function handleSubmit(event) {
  event.preventDefault();

  const newToy = {
    ...formData,
    likes : 0
    
  };

  fetch("http://localhost:3001/toys", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newToy)
  })
    .then(response => {
      if (!response.ok) {
        throw new Error("Failed to add toy");
      }
      return response.json();
    })
    .then(data => {
      onCreateNewToy(data);
      setFormData({
        name : "",
        image: "",
      })
    })
    .catch(error => {
      console.error("Error adding toy:", error);
    });
}

  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={handleSubmit}>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          value = {formData.name}
          onChange = {handleChange}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          value = {formData.image}
          onChange = {handleChange}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        
        />
      </form>
    </div>
  );
}

export default ToyForm;
