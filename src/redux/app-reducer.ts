const SET_DARK_THEME = 'SET_DARK_THEME';

let initialState = {
    darkTheme: true,
};

export interface I_setDarkTheme {
    type: typeof SET_DARK_THEME
    darkTheme: boolean
}

type actionType = I_setDarkTheme ;

const appReducer = (state = initialState, action: actionType) => {
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

export default appReducer