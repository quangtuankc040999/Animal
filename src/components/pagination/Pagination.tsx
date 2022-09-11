import React, { useEffect, useState } from 'react'
import { RootState } from '../../redux/store'
import { Li, Li2, PaginationContainer, Ul } from './style'
import { Dispatch } from "redux"
import { useDispatch, useSelector } from 'react-redux'
import { getAnimalAction } from '../../redux/animal/actionCreator'


export default function Pagination() {
    const pagination = useSelector((state: RootState) => state.animal.pagination)
    const [startIndex, setStartIndex] = useState(1)
    const [isDisableLeftButton, setIsDisableLeftButton] = useState(true)
    const [isDisableRightButton, setIsDisableRightButton] = useState(true)

  const dispatch: Dispatch = useDispatch()

    useEffect(() => {
        if (startIndex == 1) {
            setIsDisableLeftButton(true)
        } else {
            setIsDisableLeftButton(false)
        }
    }, [startIndex])
    useEffect(() => {
        if (pagination && (startIndex + 2) >= pagination.total_pages) {
            setIsDisableRightButton(true)
        } else {
            setIsDisableRightButton(false)
        }
    }, [startIndex])
    const handleLeftButtonClick = () => {
        setStartIndex(startIndex - 3)

    }
    const handleRightButtonClick = () => {
        setStartIndex(startIndex + 3)
    }
    const getData = (index) => {
        const fetchData = async () => {
            if(pagination && (startIndex + 3) == pagination.total_pages ) {
                dispatch(await getAnimalAction(index))
            }
          }
          fetchData()
    }
    return (
        <PaginationContainer>
            <Ul>
                <Li2> <button disabled={isDisableLeftButton} onClick={handleLeftButtonClick}>&#171;</button></Li2>
                {startIndex != 1 &&
                    <Li>...</Li>
                }
                <Li onClick={() => getData(startIndex)}>{startIndex}</Li>
                {pagination && (startIndex + 1) <= pagination.total_pages &&
                    <Li onClick={() => getData(startIndex + 1)}>{startIndex + 1}</Li>
                }
                {pagination && (startIndex + 2) <= pagination.total_pages &&
                    <Li onClick={() => getData(startIndex + 2)}>{startIndex + 2}</Li>
                }
                {pagination && (startIndex + 3) < pagination.total_pages &&
                    <Li>...</Li>
                }
                <Li2><button disabled={isDisableRightButton} onClick={handleRightButtonClick}>&#187;</button></Li2>
            </Ul>
        </PaginationContainer>
    )
}
