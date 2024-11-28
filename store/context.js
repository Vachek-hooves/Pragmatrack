import {createContext, useContext, useState, useEffect} from 'react';
import {
  loadTasksFromStorage,
  saveTasksToStorage,
  createNewTask,
  removeTask,
  modifyTask,
} from './utils';

const CreateContext = createContext({});

export const AppContext = ({children}) => {
  const [allTasks, setAllTasks] = useState([]);

  useEffect(() => {
    const initializeTasks = async () => {
      const tasks = await loadTasksFromStorage();
      setAllTasks(tasks);
    };
    initializeTasks();
  }, []);

  const addTask = async task => {
    const updatedTasks = createNewTask(task, allTasks);
    setAllTasks(updatedTasks);
    await saveTasksToStorage(updatedTasks);
  };

  const deleteTask = async (taskId) => {
    const updatedTasks = removeTask(taskId, allTasks);
    setAllTasks(updatedTasks);
    await saveTasksToStorage(updatedTasks);
  };

  const updateTask = async (taskId, updatedData) => {
    const updatedTasks = modifyTask(taskId, updatedData, allTasks);
    setAllTasks(updatedTasks);
    await saveTasksToStorage(updatedTasks);
  };

  const value = {
    allTasks,
    addTask,
    deleteTask,
    updateTask,
  };
  return (
    <CreateContext.Provider value={value}>{children}</CreateContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(CreateContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppContext');
  }
  return context;
};
