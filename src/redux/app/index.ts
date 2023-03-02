import { I_appReducer } from 'src/redux/types';
import { appDataActionType, I_setDarkTheme } from './types';

const SET_DARK_THEME = 'SET_DARK_THEME';

const initialState: I_appReducer = {
    darkTheme: true,
};

export default (state = initialState, action: appDataActionType): I_appReducer => {
    switch (action.type) {
    case SET_DARK_THEME:
        return {
            ...state,
            darkTheme: action.darkTheme,
        };

    default:
        return state
    }
};

export const setDarkTheme = (darkTheme: boolean): I_setDarkTheme => {
    return {
        type: SET_DARK_THEME,
        darkTheme
    }
};