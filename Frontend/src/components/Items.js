import React from "react";
import { Draggable } from "react-beautiful-dnd";

const Items = ({ item, index, handleDelete, handleEdit, handleUpdate }) => {
  return (
    <Draggable draggableId={item._id} index={index}>
      {(provided) => (
        <li
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          key={item._id}
          style={{
            border: "1px solid #ccc",
            borderRadius: "5px",
            padding: "10px",
            marginBottom: "10px",
            ...provided.draggableProps.style
          }}
        >
          <h3>{item.name}</h3>
          <p>TimeLine: {item.timeLine}</p>
          <p>Notes/Review: {item.notes}</p>
          <p>Link: {item.link}</p>
          <button
            style={{
              backgroundColor: "#007bff",
              color: "#fff",
              border: "none",
              padding: "8px 16px",
              borderRadius: "5px",
              marginRight: "5px",
              cursor: "pointer"
            }}
            onClick={() => handleEdit(item)}
          >
            Edit
          </button>
          <button
            style={{
              backgroundColor: "#dc3545",
              color: "#fff",
              border: "none",
              padding: "8px 16px",
              borderRadius: "5px",
              cursor: "pointer"
            }}
            onClick={() => handleDelete(item._id)}
          >
            Delete
          </button>
        </li>
      )}
    </Draggable>
  );
};

export default Items;
