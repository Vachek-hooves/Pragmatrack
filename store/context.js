import {createContext, useContext, useState, useEffect} from 'react';
import {
  loadTasksFromStorage,
  saveTasksToStorage,
  createNewTask,
  removeTask,
  modifyTask,
  saveArchivedTasksToStorage,
  loadArchivedTasksFromStorage,
  loadBookmarkedQuotesFromStorage,
  saveBookmarkedQuotesToStorage,
} from './utils';

const CreateContext = createContext({
  allTasks: [],
  archivedTasks: [],
  addTask: () => {},
  deleteTask: () => {},
  updateTask: () => {},
  saveBookmarkedQuote: () => {},
  removeBookmarkedQuote: () => {},
});


export const AppContext = ({children}) => {
  const [allTasks, setAllTasks] = useState([]);
  const [archivedTasks, setArchivedTasks] = useState([]);
  const [bookmarkedQuotes, setBookmarkedQuotes] = useState([]);

  useEffect(() => {
    const initializeTasks = async () => {
      const tasks = await loadTasksFromStorage();
      setAllTasks(tasks);
      const archivedTasks = await loadArchivedTasksFromStorage();
      setArchivedTasks(archivedTasks);
      const bookmarkedQuotes = await loadBookmarkedQuotesFromStorage();
      setBookmarkedQuotes(bookmarkedQuotes);
    };
    initializeTasks();
  }, []);

  const addTask = async task => {
    const updatedTasks = createNewTask(task, allTasks);
    setAllTasks(updatedTasks);
    await saveTasksToStorage(updatedTasks);
  };

  const deleteTask = async (taskId) => {
    // Find the task to archive
    const taskToArchive = allTasks.find(task => task.id === taskId);
    if (!taskToArchive) return;

    // Remove from active tasks
    const updatedTasks = removeTask(taskId, allTasks);
    setAllTasks(updatedTasks);
    await saveTasksToStorage(updatedTasks);

    // Add to archived tasks
    const updatedArchivedTasks = [{...taskToArchive, archivedAt: new Date().toISOString()},...archivedTasks ];
    setArchivedTasks(updatedArchivedTasks);
    await saveArchivedTasksToStorage(updatedArchivedTasks);
  };

  const updateTask = async (taskId, updatedData) => {
    const updatedTasks = modifyTask(taskId, updatedData, allTasks);
    setAllTasks(updatedTasks);
    await saveTasksToStorage(updatedTasks);
  };

  const saveBookmarkedQuote = async (quote) => {
    // console.log('save bookmarked quote', quote);
    const updatedBookmarkedQuotes=[...bookmarkedQuotes,quote]
    setBookmarkedQuotes(updatedBookmarkedQuotes);
    await saveBookmarkedQuotesToStorage(updatedBookmarkedQuotes);
  }
  const removeBookmarkedQuote=async(quote)=>{
    const updatedBookmarkedQuotes=bookmarkedQuotes.filter(bookmarked=>bookmarked.id!==quote.id)
    setBookmarkedQuotes(updatedBookmarkedQuotes);
    await saveBookmarkedQuotesToStorage(updatedBookmarkedQuotes);
  }

  

  const value = { 
    archivedTasks,
    allTasks,
    bookmarkedQuotes,
    addTask,
    deleteTask,
    updateTask,
    saveBookmarkedQuote,
    removeBookmarkedQuote
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
