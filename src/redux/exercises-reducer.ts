const SET_EXERCISES = 'SET_EXERCISES';
const CHANGE_EXERCISE = 'CHANGE_EXERCISE';
const DELETE_EXERCISE = 'DELETE_EXERCISE';

let initialState = {
    exercisesList: [
        {"name": "Жим штанги лежа", "tags": ["Грудь"], "key": 1, "id": "1"},
        {"name": "Разведения гантель в наклоне", "tags": ["Грудь"], "key": 2, "id": "2"},
        {"name": "Подъем штанги на бицепс", "tags": ["Бицепс"], "key": 3, "id": "3"},
        {"name": "Жим штанги лежа в наклоне", "tags": ["Грудь"], "key": 4, "id": "4"},
        {"name": "Отжимания на брусьях", "tags": ["Грудь", "Трицепс"], "key": 5, "id": "5"},
        {"name": "Подтягивания обратным хватом", "tags": ["Бицепс", "Спина"], "key": 6, "id": "6"},
        {"name": "Жим гантелей сидя", "tags": ["Плечи"], "key": 7, "id": "7"},
        {"name": "Тяга блока к груди", "tags": ["Спина", "Плечи"], "key": 8, "id": "8"},
        {"name": "Махи гантелей", "tags": ["Плечи"], "key": 9, "id": "9"},
        {"name": "Приседания", "tags": ["Ноги"], "key": 10, "id": "10"}
    ],
};

export type exercise = {
    name: string,
    tags: string[],
    key: number,
    id: string
}

interface I_setExercise {
    type: typeof SET_EXERCISES
    name: string
    tags: string[]
}

interface I_changeExercise {
    type: typeof CHANGE_EXERCISE
    id: string
    name: string
    tags: string[]
}

interface I_deleteExercise {
    type: typeof DELETE_EXERCISE
    id: string
}

type actionType = I_setExercise | I_changeExercise | I_deleteExercise;


const getUniqID = (arr: any) => Math.max(...arr.map((el: exercise) => el.key)) + 1;

const exercisesReducer = (state = initialState, action: actionType) => {
    switch (action.type) {
        case SET_EXERCISES:
            return {
                ...state,
                exercisesList: [...state.exercisesList, {
                    name: action.name.trim(),
                    tags: action.tags,
                    id: getUniqID(state.exercisesList),
                    key: `${getUniqID(state.exercisesList)}`
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

export const changeExercise = (id: string, name: string, tags: string[]): I_changeExercise => {
    return {
        type: CHANGE_EXERCISE,
        id, name, tags
    }
};

export const deleteExercise = (id: string): I_deleteExercise => {
    return {
        type: DELETE_EXERCISE,
        id
    }
};


export default exercisesReducer