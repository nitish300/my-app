import React, { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    height: "",
    weight: "",
    gender: ""
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    console.log("message", e);
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    let newErrors = {};

    if (!formData.name) newErrors.name = "Please enter your name";
    if (!formData.age) newErrors.age = "Please enter your age";
    if (!formData.height) newErrors.height = "Please select your height";
    if (!formData.weight) newErrors.weight = "Please select your weight";
    if (!formData.gender) newErrors.gender = "Please select your gender";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      // Handle form submission here (e.g., send data to backend)
      console.log("Form submitted successfully:", formData);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        height: "100vh",
        alignItems: "center",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          boxShadow: "rgba(0, 0, 0, 0.16) 0px 0px 8px 9px",
          padding: "20px",
        }}
      >
        <div>
          <label style={{ display: "block" }}>Name</label>
          <input
            name="name"
            style={{
              width: "400px",
              height: "40px",
              border: "1px solid grey",
              borderRadius: "4px",
              margin: "5px 0px",
            }}
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
        </div>

        <div>
          <label style={{ display: "block" }}>Age</label>
          <input
            type="number"
            name="age"
            style={{
              width: "400px",
              height: "40px",
              border: "1px solid grey",
              borderRadius: "4px",
              margin: "5px 0px",
            }}
            value={formData.age}
            onChange={handleChange}
          />
          {errors.age && <p style={{ color: "red" }}>{errors.age}</p>}
        </div>

        <div style={{ display: "flex", margin: "5px 0px" }}>
          <div style={{ marginRight: "16px" }}>
            <label style={{ display: "block" }}>Height</label>
            <select
              name="height"
              style={{
                height: "40px",
                width: "195px",
              }}
              value={formData.height}
              onChange={handleChange}
            >
              <option value="">Select Height</option>
              <option value="5.7">5.7</option>
              <option value="6.6">6.6</option>
            </select>
            {errors.height && <p style={{ color: "red" }}>{errors.height}</p>}
          </div>

          <div>
            <label style={{ display: "block" }}>Weight</label>
            <select
              name="weight"
              style={{
                height: "40px",
                width: "195px",
              }}
              value={formData.weight}
              onChange={handleChange}
            >
              <option value="">Select Weight</option>
              <option value="60">60</option>
              <option value="70">70</option>
            </select>
            {errors.weight && <p style={{ color: "red" }}>{errors.weight}</p>}
          </div>
        </div>

        <div>
          <label style={{ display: "block" }}>Gender</label>
          <select
            name="gender"
            style={{
              height: "40px",
              width: "405px",
              margin: "5px 0px",
            }}
            value={formData.gender}
            onChange={handleChange}
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          {errors.gender && <p style={{ color: "red" }}>{errors.gender}</p>}
        </div>

        <div style={{ textAlign: "center", marginTop: "40px" }}>
          <button
            type="submit"
            style={{
              border: "none",
              padding: "15px 100px",
              background: "#cfb401e3",
            }}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
