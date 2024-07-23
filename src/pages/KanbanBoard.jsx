import Column from './Column';

const KanbanBoard = ({ boardData }) => {
  return (
    <div className="flex space-x-4 overflow-x-auto">
      {boardData.columnOrder.map((columnId) => {
        const column = boardData.columns[columnId];
        const tasks = column.taskIds.map((taskId) => boardData.tasks[taskId]);

        return <Column key={column.id} column={column} tasks={tasks} />;
      })}
    </div>
  );
};

export default KanbanBoard;