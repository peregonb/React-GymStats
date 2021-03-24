import {exercises} from "./app-reducer";

export interface appReducerInterface {
    darkTheme: boolean,
    exercises: exercises[]
}

export interface stateInterface {
    app: appReducerInterface
}