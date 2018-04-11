import { combineReducers } from 'redux';
import items from './setItems';
import sort from './setSort';

export default combineReducers({
  items,
  sort,
});