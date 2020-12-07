import { createSelector } from 'reselect';

export const todosSelector = createSelector(
    (store) => store.todoReducer.todos,
    (todos) => todos
);