const SET_EXERCISES = 'SET_EXERCISES';

let initialState = {
    exercisesList: [
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

export interface I_setExercises {
    type: typeof SET_EXERCISES
    exercisesList: exercises[]
}

type actionType = I_setExercises;

const exercisesReducer = (state = initialState, action: actionType) => {
    switch (action.type) {
        case SET_EXERCISES:
            return {
                ...state,
                exercisesList: [...state.exercisesList, action.exercisesList],
            };

        default:
            return state
    }
};

export const setExercises = (exercisesList: exercises[]): I_setExercises => {
    return {
        type: SET_EXERCISES,
        exercisesList
    }
};


export default exercisesReducer