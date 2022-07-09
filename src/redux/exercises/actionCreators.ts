import {
    changeExerciseAction,
    deleteExerciseAction,
    EExercisesDataReducerActionNames,
    I_changeExercise,
    I_deleteExercise,
    I_setExercise,
    setExerciseAction
} from './types';

export const setExercise = ({ name, tags }: I_setExercise): setExerciseAction => {
    return {
        type: EExercisesDataReducerActionNames.SET_EXERCISES,
        payload: {
            name,
            tags
        }
    }
};

export const changeExercise = ({ id, name, tags }: I_changeExercise): changeExerciseAction => {
    return {
        type: EExercisesDataReducerActionNames.CHANGE_EXERCISE,
        payload: {
            id,
            name,
            tags
        }
    }
};

export const deleteExercise = ({ id }: I_deleteExercise): deleteExerciseAction => {
    return {
        type: EExercisesDataReducerActionNames.DELETE_EXERCISE,
        payload: {
            id
        }
    }
};