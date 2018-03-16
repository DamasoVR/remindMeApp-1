import 'react-native';
import React from 'react';
import TasksScreen from '../../src/screens/HomeScreen';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

let component;
const currentTasks = TasksScreen.state;
const modal = new TasksScreen();
const navigationMock = { navigate: jest.fn() };

describe('Tasks Screen - ', () => {

  it('should render correctly', () => {
    component = renderer.create(
      <TasksScreen navigation={navigationMock}/>
    ).toJSON();
    expect(component).toMatchSnapshot();
  });

  it('should calculate the number tasks to be completed', () => {
    //Comparar que las tareas sean igual al estado, para asi validar que sean las mismas.
    const numberOfTasks = TasksScreen.props.calcultateToBeCompletedTasks(TasksScreen.state.tasks); //.toJSON()
    expect(numberOfTasks).toEqual(3); //toBe(3);
  });


    it('should check if a task is toggled', () => { //volver a hacer esta prueba no funciono
      const taskState = TasksScreen.currentTask; //Me traigo el la tarea actual.
      taskState.setState(!taskState);
      expect(taskState)not.toBe(taskState);
    });

    it('should check if a task was completed', () => {
      //Por cada tarea que sea diferente a completada aumentar el contador para asi saber cuales tareas fueron completadas.
      let cont;
      const currentNumberOfTasks = TasksScreen.state;
      currentNumberOfTasks.forEach(TasksScreen.task => {
        if(!currentNumberOfTasks.completed){
          cont++;
        }
      });
      expect(currentNumberOfTasks)not.toBe(cont);
      //expect(currentNumberOfTasks).not.toBe(currentTask + 1);
    });

    it('should check if a new task was added', () => {
      //Tener una constante con las tareas actuales y compararlas con el estado para ver si son las mismas.
      let contador;
      let currentTasksState = TasksScreen.state;
      currentTasksState.forEach(currentTasks => {
        if(currentTasksState.length() != currentTasks){
          contador++;
        }
      }
      expect(contador)not.toBe(currentTasks);
    });

    it('should open modal', () => {
      expect(modal.openAddTaskModal().toBe(undefined));
    });

    it('should close modal', () => {
      expect(modal.closeAddTaskModal().toBe(undefined));
    });

});
