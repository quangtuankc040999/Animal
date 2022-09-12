import React from 'react'
import { IAnimal } from '../../interfaces/components'
import { CardContainer, Image, Ul } from './style'

export const Card = ({
  id,
  url,
  name,
  gender,
  description,
  contact,
  age,
  photos
}: IAnimal) => {
  // const photo = photos.map((img, i) => {
  //   if (photos.length && i == 0) {
  //     if (photos[0].full) {
  //       return <Image src={photos[0].full} key={i} />
  //     } else if (photos[0].small) {
  //       return <Image src={photos[0].small}  key={i}  />
  //     } else if (photos[0].large) {
  //       return <Image src={photos[0].large}  key={i} />
  //     } else if (photos[0].medium) {
  //       return <Image src={photos[0].medium}  key={i} />
  //     } else {
  //       return <Image src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/330px-No-Image-Placeholder.svg.png' />
  //     }
  //   } else {
  //     return <Image src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/330px-No-Image-Placeholder.svg.png' />
  //   }

  // })
  return (
    <CardContainer>
      { photos.length > 0 && photos[0].full &&
        <Image src={photos[0].full} />
      } 
      { photos.length <= 0 &&
        <Image src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/330px-No-Image-Placeholder.svg.png' />
      }
      <div>
        <Ul>
          <li>Name: {name}</li>
          <li>Gender: {gender}</li>
          <li>Age: {age}</li>

        </Ul>
       
      </div>
    </CardContainer>
  )
}
