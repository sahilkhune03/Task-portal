import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemForm from "./ItemForm.js";
import {
  deleteItem,
  reorderItems,
  addItem,
  updateItem
} from "../actions/itemActions.js";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import Items from "./Items.js";

const ItemList = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.items);
  const [formData, setFormData] = useState({
    name: "",
    timeLine: "",
    notes: "",
    link: "",
    status: "TODO",
    _id:''
  });
  const [editId, setEditId] = useState(null);

  const handleDelete = (id) => {
    dispatch(deleteItem(id));
  };

  const handleUpdate = (item) => {
    setFormData({
      name: item.name,
      timeLine: item.timeLine,
      notes: item.notes,
      link: item.link,
      _id: item._id,
      status: item.status
    });
    setEditId(null);
  };

  const handleEdit = (item) => {
    handleUpdate(item);
  };



  const handleDragEnd = (result) => {
    
    if (!result.destination) return;

    const startIndex = result.source.index;
    const endIndex = result.destination.index;
    const draggedItem = items.filter((item)=>item._id == result.draggableId)[0];
    
    if (result.source.droppableId === result.destination.droppableId) {
      //dispatch(reorderItems(startIndex, endIndex));
    } else {
      const newStatus = result.destination.droppableId;
      const updatedItem = { ...draggedItem, status: newStatus };
      dispatch(updateItem(draggedItem._id, updatedItem));

      //dispatch(reorderItems(startIndex, endIndex));
    }
  };

  const renderItemsByStatus = (status) => {
    return items
      .filter((item) => item.status === status)
      .map((item, index) => (
        <Items
          key={item._id}
          item={item}
          index={index}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
          handleUpdate={handleUpdate}
        />
      ));
  };

  return (
    <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <ItemForm
        editId={editId}
        formData={formData}
        setFormData={setFormData}
        style={{ marginBottom: '20px', width: '100%' }}
      />

      <DragDropContext onDragEnd={handleDragEnd}>
        <div style={{ display: "flex", justifyContent: "space-evenly", width: '100%', minHeight:'300px', gap:10 }}>
          <div className="droppable-area" style={{ flex: 1, padding: '10px', border: '1px solid #ccc', borderRadius: '5px', backgroundColor: '#f9f9f9' }}>
            <h2>TODO</h2>
            <Droppable droppableId="TODO">
              {(provided) => (
                <ul
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  style={{ listStyleType: "none", padding: 0 }}
                >
                  {renderItemsByStatus("TODO")}
                  {provided.placeholder}
                </ul>
              )}
            </Droppable>
          </div>
          <div className="droppable-area" style={{ flex: 1, padding: '10px', border: '1px solid #ccc', borderRadius: '5px', backgroundColor: '#f9f9f9' }}>
            <h2>Working</h2>
            <Droppable droppableId="Working">
              {(provided) => (
                <ul
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  style={{ listStyleType: "none", padding: 0 }}
                >
                  {renderItemsByStatus("Working")}
                  {provided.placeholder}
                </ul>
              )}
            </Droppable>
          </div>
          <div className="droppable-area" style={{ flex: 1, padding: '10px', border: '1px solid #ccc', borderRadius: '5px', backgroundColor: '#f9f9f9' }}>
            <h2>Completed</h2>
            <Droppable droppableId="Completed">
              {(provided) => (
                <ul
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  style={{ listStyleType: "none", padding: 0 }}
                >
                  {renderItemsByStatus("Completed")}
                  {provided.placeholder}
                </ul>
              )}
            </Droppable>
          </div>
        </div>
      </DragDropContext>
    </div>
  );
};

export default ItemList;
