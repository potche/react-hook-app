import React from 'react';
import ReactDOM from 'react-dom/client';

// import { HooksApp } from './HooksApp.tsx';
// import { CounterApp } from './useState/CounterApp';
// import { CounterWhitCustomHookApp } from './useState/CounterWhitCustomHookApp';
// import { SimpleFormApp } from './useEffect/SimpleForm';
// import { FormWithCustomHook } from './useEffect/FormWithCustomHook';
// import { FocusScreen } from './useRef/FocusScreen';
// import { Memorize } from './memos/Memorize';
// import { MemoHook } from './memos/MemoHook';
// import { CallbackHook } from './memos/CallbackHook';
// import { IntroReducer } from './useReducer/IntroReducer';
import { TodoApp } from './useReducer/TodoApp';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <TodoApp />
  </React.StrictMode>
);
