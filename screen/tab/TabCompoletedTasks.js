import {useAppContext} from '../../store/context';
import ScrollLayout from '../../component/layout/ScrollLayout';
import ArchivedTask from '../../component/TabArchivedTasksScreen/ArchivedTask';

const TabCompoletedTasks = () => {
  const {allCompletedTasks} = useAppContext();

  const renderCompletedTasks = () => {
    return allCompletedTasks.map(task => {
      return (
        <ArchivedTask
          key={task.id}
          archivedTask={task}
          taskStatus={'Completed Task'}
        />
      );
    });
  };
  return (
    <ScrollLayout title={'Completed Tasks'}>
      {renderCompletedTasks()}
    </ScrollLayout>
  );
};

export default TabCompoletedTasks;
