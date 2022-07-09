import { getUniqID } from '@components/common/helpers';
import { I_exercise } from '@redux/exercises/types';
import { I_templatesReducer } from '@redux/types';

const ADD_TEMPLATE = 'ADD_TEMPLATE';
const DELETE_TEMPLATE = 'DELETE_TEMPLATE';

const initialState: I_templatesReducer = {
    templatesList: [
        {
            'key': '1',
            'id': 1,
            'title': 'Тренировка: Грудь + Бицепс',
            'exercises': [
                { 'name': 'Жим штанги лежа', 'tags': [ 'Грудь' ], 'key': '1', 'id': 1 },
                { 'name': 'Разведения гантель в наклоне', 'tags': [ 'Грудь' ], 'key': '2', 'id': 2 },
                { 'name': 'Подъем штанги на бицепс', 'tags': [ 'Бицепс' ], 'key': '3', 'id': 3 },
                { 'name': 'Жим штанги лежа в наклоне', 'tags': [ 'Грудь' ], 'key': '4', 'id': 4 }
            ]
        },
        {
            'key': '2',
            'id': 2,
            'title': 'Тренировка: Спина + Плечи',
            'exercises': [
                { 'name': 'Подтягивания обратным хватом', 'tags': [ 'Бицепс', 'Спина' ], 'id': 1, 'key': '1' },
                { 'name': 'Жим гантелей сидя', 'tags': [ 'Плечи' ], 'id': 2, 'key': '2' },
                { 'name': 'Тяга блока к груди', 'tags': [ 'Спина', 'Плечи' ], 'id': 3, 'key': '3' },
                { 'name': 'Махи гантелей', 'tags': [ 'Плечи' ], 'id': 4, 'key': '4' },
            ]
        }
    ],
};

export type template = {
    key: string,
    id: number,
    title: string,
    exercises: I_exercise[],
}

export interface I_addTemplate {
    type: typeof ADD_TEMPLATE,
    newTemplate: template
}

export interface I_deleteTemplate {
    type: typeof DELETE_TEMPLATE,
    id: number
}


type actionType = I_addTemplate | I_deleteTemplate;


export default (state = initialState, action: actionType): I_templatesReducer => {
    switch (action.type) {
    case ADD_TEMPLATE:
        return {
            ...state,
            templatesList: [ {
                title: action.newTemplate.title,
                exercises: action.newTemplate.exercises,
                id: getUniqID(state.templatesList),
                key: `${ getUniqID(state.templatesList) }`
            }, ...state.templatesList ]
        };

    case DELETE_TEMPLATE:
        return {
            ...state,
            templatesList: state.templatesList.filter(el => el.id !== action.id)
        };


    default:
        return state
    }
};

export const addTemplate = (newTemplate: template): I_addTemplate => {
    return {
        type: ADD_TEMPLATE,
        newTemplate
    }
};

export const deleteTemplate = (id: number): I_deleteTemplate => {
    return {
        type: DELETE_TEMPLATE,
        id
    }
};