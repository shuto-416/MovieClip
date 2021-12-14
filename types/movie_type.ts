export enum movie_enum {
  ALL,
  ACTION,
  COMEDDY,
  ANIME,
  MISSING = -1
}

export type movie_types = {
  id: movie_enum,
  title: string,
  url: string,
  img?: string,
  genre: number,
  description: string,
  rating: number,
}