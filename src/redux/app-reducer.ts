const SET_DARK_THEME = 'SET_DARK_THEME';
const SET_EXERCISES = 'SET_EXERCISES';

let initialState = {
    darkTheme: true,
    exercises: [
        {'name': 'Жим штанги лежа', 'tags': ['Грудь'], 'key': 1},
        {'name': 'Разведения гантель в наклоне', 'tags': ['Грудь'], 'key': 2},
        {'name': 'Подъем штанги на бицепс', 'tags': ['Бицепс'], 'key': 3}
    ],
};

export type exercises = {
    name: string,
    tags: string[],
    key: number
}

export interface I_setDarkTheme {
    type: typeof SET_DARK_THEME
    darkTheme: boolean
}

export interface I_setExercises {
    type: typeof SET_EXERCISES
    exercises: exercises[]
}

type actionType = I_setDarkTheme | I_setExercises;

const appReducer = (state = initialState, action: actionType) => {
    switch (action.type) {
        case SET_DARK_THEME:
            return {
                ...state,
                darkTheme: action.darkTheme,
            };

        case SET_EXERCISES:
            return {
                ...state,
                exercises: [...state.exercises, action.exercises],
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

export const setExercises = (exercises: exercises[]): I_setExercises => {
    return {
        type: SET_EXERCISES,
        exercises
    }
};


export default appReducer