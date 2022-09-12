import { AnimalService } from "../../service/animal.api";
import actionTypes from "./actionType";
// import {animalsList} from '../../listAnimal'

export const getAnimalAction = async (page: number) => {
    try {
        const res = await AnimalService.getAll(`/v2/animals?page=${page}`)
        // const res = animalsList
        const listAnimal = res.data.animals.map((animal)=>{
            return {
                id: animal.id,
                contact: animal.contact,
                name: animal.name,
                type: animal.type,
                url: animal.url,
                photos: animal.photos,
                gender: animal.gender,
                age : animal.age
            }
        })
        return {
            type: actionTypes.GET_ANIMALS_SUCCESS,
            payload: {animals: listAnimal, pagination: res.data.pagination}
        }
    }
    catch (error) {
        return {
            type: actionTypes.GET_ANIMALS_FAIL,
            payload: error
        }
    }
}