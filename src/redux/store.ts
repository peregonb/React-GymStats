import { combineReducers, createStore } from 'redux';
import { I_state } from '@redux/types';
import app from './app';
import exercises from './exercises';
import templates from '@redux/templates';

const reducers = combineReducers({
    app,
    exercises,
    templates
});

const saveToLocalStorage = (state: I_state) => {
    try {
        const serialisedState = JSON.stringify(state);
        localStorage.setItem('persistentState', serialisedState);
    } catch (e) {
        console.warn(e);
    }
};
const loadFromLocalStorage = () => {
    try {
        const serialisedState = localStorage.getItem('persistentState');
        if (serialisedState === null) return undefined;
        return JSON.parse(serialisedState);
    } catch (e) {
        console.warn(e);
        return undefined;
    }
};

const store = createStore(
    reducers,
    loadFromLocalStorage(),
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
window.store = store;

store.subscribe(() => saveToLocalStorage(store.getState()));

export type App = ReturnType<typeof reducers>;
export default store;