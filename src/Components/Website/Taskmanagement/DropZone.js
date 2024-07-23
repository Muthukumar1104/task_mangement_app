import React from "react";
import { useDroppable } from "@dnd-kit/core";

const DroppableSection = ({ id, children, index }) => {
  const { setNodeRef } = useDroppable({ id, data: { id, sortable: index } });

  return (
    <div
      ref={setNodeRef}
      style={{
        padding: "16px",
        width: "30%",
        minHeight: "500px",
        backgroundColor: "white",
        border: "1px solid #ccc",
        borderRadius: "5px",
        margin: "0 8px",
      }}
    >
      {children}
    </div>
  );
};

export default DroppableSection;
