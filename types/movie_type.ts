
export enum movie_enum {
  ACTION_DEFAULT,
  COMEDDY,
  ANIME,
  MISSING = -1
}

export type movie_types = {
  id: number,
  title: string,
  url: string,
  img?: string,
  genre: number,
  description: string,
  rating: number,
}