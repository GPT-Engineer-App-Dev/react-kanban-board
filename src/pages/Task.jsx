import { Draggable } from 'react-beautiful-dnd';

const Task = ({ task, index }) => {
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className={`bg-white p-4 mb-2 rounded shadow ${
            snapshot.isDragging ? 'bg-gray-100' : ''
          }`}
        >
          {task.content}
        </div>
      )}
    </Draggable>
  );
};

export default Task;