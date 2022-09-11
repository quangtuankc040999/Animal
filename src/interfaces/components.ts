export interface LoginParam {
  grant_type: string,
  client_id: string,
  client_secret: string
}

export interface IAccount {
  tokenType: string,
  expiresIn: string,
  accessToken: string,
}

export interface IAction {
  type: string,
  payload: any
}

export interface IPagination {
  count_per_page: number,
  total_count: number,
  current_page: number,
  total_pages: number,
  _links: {
    previous: {
      href: string
    },
    next: {
      href: string
    }
  }
}
export interface IAnimal {
  id: number,
  organization_id?: string,
  url: string,
  type: string,
  species?: string,
  colors?: {
    primary?: string,
    secondary?: string | null,
    tertiary?: string | null
  },
  age?: string | number,
  gender?: string,
  size?: string | number,
  coat?: string,
  attributes?: {
    spayed_neutered: boolean,
    house_trained: boolean,
    declawed: boolean,
    special_needs: boolean,
    shots_current: boolean
  },
  environment?: {
    children: boolean,
    dogs: boolean,
    cats: boolean
  },
  tags?: string[],
  name: string,
  description?: string,
  organization_animal_id?: number | null,
  photos: [
    {
      small?: string,
      medium?: string,
      large?: string,
      full?: string
    }
  ],
  primary_photo_cropped?: {
    small?: string,
    medium?: string,
    large?: string,
    full?: string
  },
  videos?: [],
  status?: string,
  status_changed_at?: Date,
  published_at?: Date,
  distance?: null | number,
  contact: {
    email: string,
    phone: string,
    address?: {
      address1: string,
      address2?: string,
      city: string,
      state: string,
      postcode: number,
      country: string
    }
  },
  _links?: {
    self?: {
      href: string
    },
    type?: {
      href: string
    },
    organization?: {
      href: string
    }
  }
}

export type AnimalState = {
  animals: IAnimal[],
  pagination?: IPagination 
}

export type DispatchType = (args: IAction) => IAction