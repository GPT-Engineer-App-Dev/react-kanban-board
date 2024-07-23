import { Droppable } from 'react-beautiful-dnd';
import Task from './Task';

const Column = ({ column, tasks }) => {
  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-md w-64">
      <h2 className="text-lg font-semibold mb-4">{column.title}</h2>
      <Droppable droppableId={column.id}>
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className={`min-h-[100px] ${
              snapshot.isDraggingOver ? 'bg-blue-100' : ''
            }`}
          >
            {tasks.map((task, index) => (
              <Task key={task.id} task={task} index={index} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default Column;