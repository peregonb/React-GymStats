const SET_DARK_THEME = 'SET_DARK_THEME';

let initialState = {
    darkTheme: true
};

export interface setDarkThemeInterface {
  type: typeof SET_DARK_THEME
  darkTheme: boolean
}

const appReducer = (state = initialState, action: setDarkThemeInterface) => {
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

export const setDarkTheme = (darkTheme: boolean): setDarkThemeInterface => {
    return {
        type: SET_DARK_THEME,
        darkTheme
    }
};


export default appReducer