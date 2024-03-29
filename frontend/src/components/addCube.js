import React from "react"

const AddCube = () =>{
    return(
        <>
        <h1>Create</h1>
      <div class="form">
        <form action='/create/' method="POST">
          <label for="name">Name</label>
          <input type="text" id="name" name="name"/>
          <label for="name">Description</label>
          <textarea id="name" name="des"></textarea>
          <label for="image">ImageUrl</label>
          <input type="text" id="image" name="imageUrl"/>
          <label for="difficulty">Difficulty</label>
          <select id="difficulty" name="diff">
            <option value="1">1 - Very Easy</option>
            <option value="2">2 - Easy</option>
            <option value="3">3 - Medium (Standard 3x3)</option>
            <option value="4">4 - Intermediate</option>
            <option value="5">5 - Expert</option>
            <option value="6">6 - Hardcore</option>
          </select>
          <input type="submit" value="Create"/>
        </form>
      </div>
        </>
    )
}

export default AddCube