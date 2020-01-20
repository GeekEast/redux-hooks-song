
## Table of Contents

- [Define Redux](#define-redux)
  - [Define Actions: `{type:..., payload:...}`](#define-actions)
  - [Define Reducers: `(state, action)=>{...}`](#define-reducers)
  - [Define Store: `createStore()`](#define-store)
- [Use Redux](#use-redux)
  - [Read data: `useSelector()`](#read-data)
  - [Send data: `useDispatch()`](#send-data)
- [Others](#others)
  - [Collect State: `useReducer()`](#usereducer)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Define Redux
###  Define Actions
- 用描述性的方式告诉store应该如何处理数据;
- Action Creator用来创造Actions(code reuse);
```javascript
export const selectSong = (song: any) => { return { type: 'SONG_SELECTED', payload: song } }; 
```

### Define Reducers
- 定义reducers: 定义数据的`初始状态`和`处理方法`
```javascript
export const songsReducer = () => {
  return [
    { title: 'No Scrubs', duration: '4:05' },
    { title: 'Macarena', duration: '2:30' },
    { title: 'All Star', duration: '3:15' },
    { title: 'I want it That Way', duration: '5:10' }
  ];
};

export const selectedSongsReducer = (selectedSong = null, action: { type: string, payload: any }) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }
  return selectedSong;
};
```

- 整合reducers
```javascript
// components/reducers/index
import { combineReducers } from 'redux';
import { selectedSongsReducer, songsReducer } from './Song'
export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongsReducer
});
```

### Define Store
- 在全局载入store
```javascript
import { createStore } from "redux";
import reducer from './reducers';
const store = createStore(reducer);
export default store;
```

## Use Redux
### Read data
```javascript
import { useSelector } from 'react-redux';
const selectedSong = useSelector(state => _.get(state, ['selectedSong'], null));
```

### Send data
```javascript
const dispatch = useDispatch();
  <button className="ui button primary" 
      onClick={() => dispatch(selectSong(song))}> Select </button>
```

## Others
### useReducer
- 并**不是**`redux`的一部分
- 是用来**聚合**某些状态用的，**局部**`状态管理器`
```javascript
const [isLoading, setIsLoading] = useState(false);
const [isError, setIsError] = useState(false);
const [data, setData] = useState({});
```
```javascript
const reducer = (prevState, action) => {
  switch(action.type){
    case 'a': return {...state};
    case 'b': return {...state, x:1};
    case 'c': return {...state, x:2};
    default: throw new Error();
  }
}
const [state, dispatch] = useReducer(reducer, {
  isLoading: false,
  isError: false,
  data: {}
})
```

