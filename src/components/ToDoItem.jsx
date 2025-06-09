import { useState } from "react";

function ToDoItem({ todo, onToggle, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(todo.text);

  const handleSave = () => {
    onEdit(todo.id, editedText);
    setIsEditing(false);
  };

  return (
    <li className="flex items-center justify-between border-b py-2 ">
      <div className="flex items-center justify-center">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
          className="mr-2"
        />
        {isEditing ? (
          <input
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
            className="border p-1"
          />
        ) : (
          <span className={todo.completed ? "line-through text-gray-400" : ""}>
            {todo.text}
          </span>
        )}
      </div>
      <div className="flex gap-2">
        {isEditing ? (
          <button onClick={handleSave} className="text-green-600">Save</button>
        ) : (
          <button onClick={() => setIsEditing(true)} className="text-yellow-600 hover:underline">Edit</button>
        )}
        <button onClick={() => onDelete(todo.id)} className="text-red-600 hover:underline">Delete</button>
      </div>
    </li>
  );
}

export default ToDoItem;
