import React, { useEffect, useState } from 'react'
import { Card } from '../../components/card/Card'
import Navigation from '../../components/navigation/Navigation'
import { AnimalContainer, ContentContainer, Li, ListAnimalContainer, Ul } from './style'
import { useDispatch, useSelector } from 'react-redux'
import { IAnimal } from '../../interfaces/components'
import { Dispatch } from "redux"
import { getAnimalAction } from '../../redux/animal/actionCreator'
import { RootState } from '../../redux/store'
import { Navigate } from "react-router-dom";
import Pagination from '../../components/pagination/Pagination'

export const Animal = () => {
  const listAnimals: IAnimal[] = useSelector((state: RootState) => state.animal.animals)
  const token = localStorage.getItem('token')

  const dispatch: Dispatch = useDispatch()

  useEffect(() => {
    const fetchData = async () => {
      dispatch(await getAnimalAction(1))
    }
    fetchData()
  }, [])

  if (!token) {
    return <Navigate replace to="/login" />;
  } else {
    return (
      <AnimalContainer>
        <Navigation />
        <ContentContainer>
          <ListAnimalContainer>
            {listAnimals && listAnimals.length > 0 &&
              <Ul>
                {listAnimals.map((animal, i) =>
                  <Li key={i}>
                    <Card id={animal.id} type={animal.type} url={animal.url} name={animal.name} gender={animal.gender} age={animal.age} description={animal.description} contact={animal.contact} photos={animal.photos} />
                  </Li>
                )}
              </Ul>
            }
          </ListAnimalContainer>
        </ContentContainer>
        <Pagination/>
      </AnimalContainer>
    )
  }

}
