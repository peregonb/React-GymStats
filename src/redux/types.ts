import {exercise} from "./exercises-reducer";
import {template} from "./templates-reducer";

export interface I_appReducer {
    darkTheme: boolean
}

export interface I_exercisesReducer {
    exercisesList: exercise[]
}

export interface I_templatesReducer {
    templatesList: template[]
}

export interface I_state {
    app: I_appReducer,
    exercises: I_exercisesReducer,
    templates: I_templatesReducer
}