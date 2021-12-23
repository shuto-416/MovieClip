export enum movie_enum {
    ALL,
    ACTION,
    COMEDDY,
    ANIME,
    MISSING = -1,
}

export type movie_types = {
  id: number,
  title: string,
  url: string,
  img?: string,
  genre: movie_enum,
  description: string,
  rating: number,
}