import React from "react";
import { useDraggable } from "@dnd-kit/core";

const DraggableTask = ({ id, name, section, index }) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useDraggable({
      id,
      data: { id, section, sortable: { index } },
    });

  return (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      style={{
        transform: transform
          ? `translate3d(${transform.x}px, ${transform.y}px, 0)`
          : undefined,
        transition,
        padding: "8px",
        margin: "4px",
        backgroundColor: "lightblue",
        borderRadius: "4px",
        border: "1px solid #ccc",
      }}
    >
      {name}
    </div>
  );
};

export default DraggableTask;
