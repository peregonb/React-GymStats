import {exercise} from "./exercises-reducer";

export interface I_appReducer {
    darkTheme: boolean,
}

export interface I_exercisesReducer {
    exercisesList: exercise[]
}

export interface I_state {
    app: I_appReducer,
    exercises: I_exercisesReducer
}