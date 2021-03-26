import {exercises} from "./exercises-reducer";

export interface I_appReducer {
    darkTheme: boolean,
}

export interface I_exercisesReducer {
    exercisesList: exercises[]
}

export interface I_state {
    app: I_appReducer,
    exercises: I_exercisesReducer
}