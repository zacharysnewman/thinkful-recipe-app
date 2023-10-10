import React, { useState } from "react";

const initialFormData = {
  name: "",
  cuisine: "",
  photo: "",
  rating: "",
  ingredients: "",
  preparation: "",
};

function RecipeCreate({ createRecipe }) {
  /* 
  - √ TODO: When the form is submitted, a new 
  recipe should be created, and the form contents 
  cleared.
  - √ TODO: Add the required input and textarea 
  form elements.
  - √ TODO: Add the required submit and change 
  handlers
  */
  const [formData, setFormData] = useState({ ...initialFormData });
  const handleSubmit = (event) => {
    event.preventDefault();
    createRecipe({ ...formData });
    setFormData({ ...initialFormData });
  };

  const handleChange = ({ target }) => {
    const value = target.type === "checkbox" ? target.checked : target.value;
    setFormData({
      ...formData,
      [target.name]: value,
    });
  };

  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <input
                name="name"
                onChange={handleChange}
                value={formData.name}
              />
            </td>
            <td>
              <input
                name="cuisine"
                onChange={handleChange}
                value={formData.cuisine}
              />
            </td>
            <td>
              <input
                name="photo"
                onChange={handleChange}
                value={formData.photo}
              />
            </td>
            <td>
              <textarea
                name="ingredients"
                onChange={handleChange}
                value={formData.ingredients}
              />
            </td>
            <td>
              <textarea
                name="preparation"
                onChange={handleChange}
                value={formData.preparation}
              />
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
