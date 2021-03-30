const SET_EXERCISES = 'SET_EXERCISES';

let initialState = {
    templatesList: [
        {'name': 'Тренировка: Грудь + Бицепс', 'exercises': []}
    ],
};

interface I_setExercise {
    type: typeof SET_EXERCISES,
    exercisesList: any[]
}


type actionType = I_setExercise;


// const getUniqID = (arr: exercise[]) => Math.max(...arr.map(el => el.key)) + 1;

const templatesReducer = (state = initialState, action: actionType) => {
    switch (action.type) {
        case SET_EXERCISES:
            return {
                ...state,
                exercisesList: action.exercisesList
            };


        default:
            return state
    }
};

export const setExercise = (exercisesList: any): I_setExercise => {
    return {
        type: SET_EXERCISES,
        exercisesList
    }
};


export default templatesReducer