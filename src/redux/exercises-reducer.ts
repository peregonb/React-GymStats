const SET_EXERCISES = 'SET_EXERCISES';
const CHANGE_EXERCISE = 'CHANGE_EXERCISE';
const DELETE_EXERCISE = 'DELETE_EXERCISE';

let initialState = {
    exercisesList: [
        {'name': 'Жим штанги лежа', 'tags': ['Грудь'], 'key': 1, 'id': 1},
        {'name': 'Разведения гантель в наклоне', 'tags': ['Грудь'], 'key': 2, 'id': 2},
        {'name': 'Подъем штанги на бицепс', 'tags': ['Бицепс'], 'key': 3, 'id': 3}
    ],
};

export type exercise = {
    name: string,
    tags: string[],
    key: number,
    id: number
}

interface I_setExercise {
    type: typeof SET_EXERCISES
    name: string
    tags: string[]
}

interface I_changeExercise {
    type: typeof CHANGE_EXERCISE
    id: number
    name: string
    tags: string[]
}

interface I_deleteExercise {
    type: typeof DELETE_EXERCISE
    id: number
}

type actionType = I_setExercise | I_changeExercise | I_deleteExercise;


const getUniqID = (arr: exercise[]) => Math.max(...arr.map(el => el.key)) + 1;

const exercisesReducer = (state = initialState, action: actionType) => {
    switch (action.type) {
        case SET_EXERCISES:
            return {
                ...state,
                exercisesList: [...state.exercisesList, {
                    name: action.name.trim(),
                    tags: action.tags,
                    id: getUniqID(state.exercisesList),
                    key: getUniqID(state.exercisesList)
                }]
            };

        case CHANGE_EXERCISE:
            return {
                ...state,
                exercisesList: state.exercisesList.map(el => el.id === action.id ? {
                    ...el,
                    name: action.name.trim(),
                    tags: action.tags
                } : el)
            };

        case DELETE_EXERCISE:
            return {
                ...state,
                exercisesList: state.exercisesList.filter(el => el.id !== action.id)
            };

        default:
            return state
    }
};

export const setExercise = (name: string, tags: string[]): I_setExercise => {
    return {
        type: SET_EXERCISES,
        name, tags
    }
};

export const changeExercise = (id: number, name: string, tags: string[]): I_changeExercise => {
    return {
        type: CHANGE_EXERCISE,
        id, name, tags
    }
};

export const deleteExercise = (id: number): I_deleteExercise => {
    return {
        type: DELETE_EXERCISE,
        id
    }
};


export default exercisesReducer