import {StyleSheet} from 'react-native';
import {useAppContext} from '../../store/context';
import ScrollLayout from '../../component/layout/ScrollLayout';
import ArchivedTask from '../../component/TabArchivedTasksScreen/ArchivedTask';

const TabArchivedTasksScreen = () => {
  const {archivedTasks} = useAppContext();
  console.log(archivedTasks, 'archived tasks');

  const renderArchivedTasks = () => {
    return archivedTasks.map(task => {
      return <ArchivedTask archivedTask={task} key={task.id} />;
    });
  };
  return (
    <ScrollLayout title={'Deleted archive'}>
      {renderArchivedTasks()}
    </ScrollLayout>
  );
};

export default TabArchivedTasksScreen;

const styles = StyleSheet.create({});
