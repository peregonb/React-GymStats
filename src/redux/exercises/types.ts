import { Action } from 'redux';

export enum EExercisesDataReducerActionNames {
    SET_EXERCISES = 'SET_EXERCISES',
    CHANGE_EXERCISE = 'CHANGE_EXERCISE',
    DELETE_EXERCISE = 'DELETE_EXERCISE',
}

export type I_exercise = {
    name: string,
    tags: string[],
    key: string,
    id: number
}

export interface I_setExercise {
    name: string
    tags: string[]
}

export interface I_changeExercise {
    id: number
    name: string
    tags: string[]
}

export interface I_deleteExercise {
    id: number
}


export interface setExerciseAction extends Action<EExercisesDataReducerActionNames.SET_EXERCISES> {
    payload: I_setExercise;
}

export interface changeExerciseAction extends Action<EExercisesDataReducerActionNames.CHANGE_EXERCISE> {
    payload: I_changeExercise;
}

export interface deleteExerciseAction extends Action<EExercisesDataReducerActionNames.DELETE_EXERCISE> {
    payload: I_deleteExercise;
}

export type exercisesDataActionType =
    setExerciseAction |
    changeExerciseAction |
    deleteExerciseAction;