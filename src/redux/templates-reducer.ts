const SET_EXERCISES = 'SET_EXERCISES';

let initialState = {
    templatesList: [
        {
            "title": "Тренировка: Грудь + Бицепс", "exercises": [
                {"name": "Жим штанги лежа", "tags": ["Грудь"], "key": 1, "id": 1},
                {"name": "Разведения гантель в наклоне", "tags": ["Грудь"], "key": 2, "id": 2},
                {"name": "Подъем штанги на бицепс", "tags": ["Бицепс"], "key": 3, "id": 3},
                {"name": "Жим штанги лежа в наклоне", "tags": ["Грудь"], "id": 4, "key": 4}
            ]
        }
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