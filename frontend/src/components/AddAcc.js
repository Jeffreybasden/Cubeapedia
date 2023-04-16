import React from "react";

const AddAcc = () =>{
    return(
        <>
        <h1>Create Accessory</h1>
            <div class="form">
                <form action='/create/accessory/' method="POST">
                    <label for="name">Name</label>
                    <input type="text" id="name" name="name"/>
                    <label for="name">Description</label>
                    <textarea id="name" name="des"></textarea>
                    <label for="image">ImageUrl</label>
                    <input type="text" id="image" name="imageUrl"/>
                    <input type="submit" value="Create"/>
                </form>
            </div>
        </>
    )
}
export default AddAcc