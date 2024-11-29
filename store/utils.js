import AsyncStorage from '@react-native-async-storage/async-storage';

// Storage operations
export const loadTasksFromStorage = async () => {
  try {
    const savedTasks = await AsyncStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  } catch (error) {
    console.error('Error loading tasks:', error);
    return [];
  }
};

export const loadArchivedTasksFromStorage = async () => {
  try {
    const savedArchivedTasks = await AsyncStorage.getItem('archivedTasks');
    return savedArchivedTasks ? JSON.parse(savedArchivedTasks) : [];
  } catch (error) {
    console.error('Error loading archived tasks:', error);
    return [];
  }
};

export const saveTasksToStorage = async tasks => {
  try {
    await AsyncStorage.setItem('tasks', JSON.stringify(tasks));
  } catch (error) {
    console.error('Error saving tasks:', error);
    throw error;
  }
};

export const saveArchivedTasksToStorage = async tasks => {
  try {
    await AsyncStorage.setItem('archivedTasks', JSON.stringify(tasks));
  } catch (error) {
    console.error('Error saving archived tasks:', error);
    throw error;
  }
};

// Task operations
export const createNewTask = (taskData, existingTasks) => {
  const newTask = {
    id: Date.now().toString(),
    ...taskData,
    milestones: taskData.milestones.map(milestone => ({
      id: Date.now().toString() + Math.random(),
      title: milestone,
      done: false
    })),
    createdAt: new Date().toISOString(),
    completed: false,
  };
  return [...existingTasks, newTask];
};


export const removeTask = (taskId, tasks) => {
  return tasks.filter(task => task.id !== taskId);
};

export const modifyTask = (taskId, updatedData, tasks) => {
  return tasks.map(task =>
    task.id === taskId ? {...task, ...updatedData} : task,
  );
};
