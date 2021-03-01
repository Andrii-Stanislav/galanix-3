import { createAction } from '@reduxjs/toolkit';
import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

const addToChoice = createAction('userChoice/add');
const removeChoice = createAction('userChoice/remove');

// reducer
const userChoice = createReducer([], {
  [addToChoice]: (state, { payload }) => [...state, payload],
  [removeChoice]: (state, { payload }) => [
    ...state.filter(univer => univer.name !== payload),
  ],
});

const userChoiceReducer = combineReducers({ userChoice });

// selectors
const getUserChoice = state => state.userChoice.userChoice;

export { addToChoice, removeChoice, getUserChoice, userChoiceReducer };
