// TaskManagement.js
import React, { useState } from "react";
import { DndContext } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import DraggableTask from "./DragItem";
import DroppableSection from "./DropZone";

const initialTasks = {
  TODO: [
    { id: 1, name: "Task 1" },
    { id: 2, name: "Task 2" },
  ],
  INPROGRESS: [{ id: 3, name: "Task 3" }],
  DONE: [],
};

const TaskManagement = () => {
  const [tasks, setTasks] = useState(initialTasks);

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (!over) return;

    const sourceSection = active?.data?.current?.section;
    const destinationSection = over?.id;

    console.log("Active:", active.data.current.sortable.index);
    console.log("Over:", over);
    console.log("Source Section:", sourceSection);
    console.log("Destination Section:", destinationSection);

    if (
      sourceSection &&
      destinationSection &&
      sourceSection !== destinationSection
    ) {
      const sourceTasks = [...tasks[sourceSection]];
      const [movedTask] = sourceTasks.splice(
        active.data.current.sortable.index,
        1
      );

      const destinationTasks = [...tasks[destinationSection]];
      destinationTasks.splice(over.data.current.sortable.index, 0, movedTask);

      setTasks({
        ...tasks,
        [sourceSection]: sourceTasks,
        [destinationSection]: destinationTasks,
      });
    }
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        {Object.keys(tasks).map((section, i) => (
          <DroppableSection key={section} id={section} index={i}>
            <h2>{section}</h2>
            <SortableContext
              items={tasks[section].map((task) => task.id)}
              strategy={verticalListSortingStrategy}
            >
              {tasks[section].map((task, i) => (
                <DraggableTask
                  key={task.id}
                  id={task.id}
                  name={task.name}
                  section={section}
                  index={i}
                />
              ))}
            </SortableContext>
          </DroppableSection>
        ))}
      </div>
    </DndContext>
  );
};

export default TaskManagement;
