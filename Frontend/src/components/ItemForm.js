import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem, updateItem } from "../actions/itemActions.js";
import "../App.css";

const ItemForm = ({ editId, formData, setFormData }) => {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData._id) {
      dispatch(updateItem(formData._id, formData));
    } else {
      dispatch(addItem(formData));
    }
    //setFormData({ name: '', timeLine: '', notes: '', link: '', status: 'TODO', _id:'' });
  };

  const handleReset = () => {
    setFormData({
      name: "",
      timeLine: "",
      notes: "",
      link: "",
      status: "TODO",
      _id: "",
    });
  };

  return (
    <div style={{ marginBottom: "20px", alignItems: "center", gap: 10 }}>
      <h2>{editId ? "Edit Item" : "Add Item"}</h2>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          style={{ padding: "10px", marginLeft: "5px" }}
        />
        <br />
        <input
          type="text"
          name="timeLine"
          placeholder="Time Line"
          value={formData.timeLine}
          onChange={handleChange}
          style={{ padding: "10px", marginLeft: "5px" }}
        />
        <br />
        <input
          name="notes"
          placeholder="Notes/Review"
          value={formData.notes}
          onChange={handleChange}
          style={{ padding: "10px", marginLeft: "5px" }}
        />
        <br />
        <input
          type="text"
          name="link"
          placeholder="Link"
          value={formData.link}
          onChange={handleChange}
          style={{ padding: "10px", marginLeft: "5px" }}
        />
        <br />
        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
          style={{ padding: "10px", marginLeft: "5px" }}
        >
          <option value="TODO">TODO</option>
          <option value="Working">Working</option>
          <option value="Completed">Completed</option>
        </select>
        <br />
        <button
          type="submit"
          style={{
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            padding: "8px 16px",
            borderRadius: "5px",
            marginRight: "5px",
            cursor: "pointer",
            marginLeft:'5px'
          }}
        >
          {editId != undefined ? "Update" : "Add"}
        </button>
        <button
          type="button"
          onClick={handleReset}
          style={{
            backgroundColor: "#dc3545",
            color: "#fff",
            border: "none",
            padding: "8px 16px",
            borderRadius: "5px",
            cursor: "pointer",
            
          }}
        >
          Reset
        </button>
      </form>
      <h2>Items</h2>
    </div>
  );
};

export default ItemForm;
