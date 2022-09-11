import { IAnimal, IAction, AnimalState } from "../../interfaces/components";
import actionTypes from "./actionType";

const initialState:AnimalState = {
    animals: [],
}


const animalReducer = (
    state: AnimalState = initialState,
    action: IAction
): AnimalState => {
    const { type, payload } = action
    switch (type) {
        case actionTypes.GET_ANIMALS_SUCCESS:
            return payload
        case actionTypes.GET_ANIMALS_FAIL:
            return {
                ...payload,
                
            }
    }
    return state
}
export default animalReducer