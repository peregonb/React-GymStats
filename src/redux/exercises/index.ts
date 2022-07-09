import { getUniqID } from '@components/common/helpers';
import { I_exercisesReducer } from '../types';
import {
    EExercisesDataReducerActionNames,
    exercisesDataActionType
} from './types';

const initialState: I_exercisesReducer = {
    exercisesList: [
        { 'name': 'Жим штанги лежа', 'tags': [ 'Грудь' ], 'id': 1, 'key': '1' },
        { 'name': 'Разведения гантель в наклоне', 'tags': [ 'Грудь' ], 'id': 2, 'key': '2' },
        { 'name': 'Подъем штанги на бицепс', 'tags': [ 'Бицепс' ], 'id': 3, 'key': '3' },
        { 'name': 'Жим штанги лежа в наклоне', 'tags': [ 'Грудь' ], 'id': 4, 'key': '4' },
        { 'name': 'Отжимания на брусьях', 'tags': [ 'Грудь', 'Трицепс' ], 'id': 5, 'key': '5' },
        { 'name': 'Подтягивания обратным хватом', 'tags': [ 'Бицепс', 'Спина' ], 'id': 6, 'key': '6' },
        { 'name': 'Жим гантелей сидя', 'tags': [ 'Плечи' ], 'id': 7, 'key': '7' },
        { 'name': 'Тяга блока к груди', 'tags': [ 'Спина', 'Плечи' ], 'id': 8, 'key': '8' },
        { 'name': 'Махи гантелей', 'tags': [ 'Плечи' ], 'id': 9, 'key': '9' },
        { 'name': 'Приседания', 'tags': [ 'Ноги' ], 'id': 10, 'key': '10' }
    ],
};

export default (state = initialState, action: exercisesDataActionType): I_exercisesReducer => {
    const { payload, type } = action;

    switch (type) {
    case EExercisesDataReducerActionNames.SET_EXERCISES:
        return {
            ...state,
            exercisesList: [ ...state.exercisesList, {
                name: payload.name.trim(),
                tags: payload.tags,
                id: getUniqID(state.exercisesList),
                key: `${ getUniqID(state.exercisesList) }`
            } ]
        };

    case EExercisesDataReducerActionNames.CHANGE_EXERCISE:
        return {
            ...state,
            exercisesList: state.exercisesList.map(el => el.id === payload.id ? {
                ...el,
                name: payload.name.trim(),
                tags: payload.tags
            } : el)
        };

    case EExercisesDataReducerActionNames.DELETE_EXERCISE:
        return {
            ...state,
            exercisesList: state.exercisesList.filter(el => el.id !== payload.id)
        };

    default:
        return state;
    }
};