import React, { useState } from 'react';

function AddDataComponent() {
  const [formData, setFormData] = useState({
    stateID: '',
    stateName: '',
    stateDesc: '',
    ImagesData: [
      {
        cardImage: '',
        bgImage: '',
        cardTitle: '',
      },
      {
        cardImage: '',
        bgImage: '',
        cardTitle: '',
      },
      {
        cardImage: '',
        bgImage: '',
        cardTitle: '',
      },
    ],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageUpload = (e, index, imageType) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = (event) => {
      const base64Image = event.target.result;
      const updatedImagesData = [...formData.ImagesData];
      updatedImagesData[index][imageType] = base64Image;
      setFormData({ ...formData, ImagesData: updatedImagesData });
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send formData to the API using the fetch API
      const response = await fetch('http://localhost:3001/api/states', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("DONE")
    } else {
          console.log("F")
        }
    } catch (error) {
        console.log("SHET", error)
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* Input fields for stateID, stateName, stateDesc */}
        <label htmlFor="stateID">State ID</label>
        <input
          type="text"
          id="stateID"
          name="stateID"
          value={formData.stateID}
          onChange={handleInputChange}
        />
        
        <label htmlFor="stateName">State Name</label>
        <input
          type="text"
          id="stateName"
          name="stateName"
          value={formData.stateName}
          onChange={handleInputChange}
        />
        
        <label htmlFor="stateDesc">State Description</label>
        <textarea
          id="stateDesc"
          name="stateDesc"
          value={formData.stateDesc}
          onChange={handleInputChange}
        />

        {/* File upload inputs for cardImage and bgImage */}
        {formData.ImagesData.map((imageData, index) => (
          <div key={index}>
            <label htmlFor={`cardImage-${index}`}>Card Image</label>
            <input
              type="file"
              id={`cardImage-${index}`}
              accept="image/*"
              onChange={(e) => handleImageUpload(e, index, 'cardImage')}
            />

            <label htmlFor={`bgImage-${index}`}>Background Image</label>
            <input
              type="file"
              id={`bgImage-${index}`}
              accept="image/*"
              onChange={(e) => handleImageUpload(e, index, 'bgImage')}
            />

            <label htmlFor={`cardTitle-${index}`}>Card Title</label>
            <input
              type="text"
              id={`cardTitle-${index}`}
              name={`cardTitle-${index}`}
              value={imageData.cardTitle}
              onChange={handleInputChange}
            />

            {/* Display a preview of the selected card image */}
            {imageData.cardImage && (
              <img src={imageData.cardImage} alt={`Card Image ${index}`} />
            )}
          </div>
        ))}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddDataComponent;
