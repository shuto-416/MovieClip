export const products = [
    {
        id: 1,
        title: "インターステラ",
        img: "https://cdn.javastorm.net/images/interstellar.jpg",
        url: "https://eiga.com/movie/78321/",
        genre: 0,
        descriotion: "未来を描く",
        rating: 4.5,
      },
      {
        id: 2,
        title: "rick and morty",
        img: "https://cdn.javastorm.net/images/rick-and-morty.jpg",
        url: "https://eiga.com/movie/78321/",
        genre: 1,
        descriotion: "未来を描く",
        rating: 4.5,
      },
      {
        id: 3,
        title: "rick and morty 2",
        img: "https://cdn.javastorm.net/images/rick-and-morty.jpg",
        url: "https://eiga.com/movie/78321/",
        genre: 1,
        descriotion: "未来を描く",
        rating: 4.5,
      },
      {
        id: 4,
        title: "相席食堂",
        img: "https://cdn.javastorm.net/images/rick-and-morty.jpg",
        url: "https://eiga.com/movie/78321/",
        genre: 1,
        descriotion: "未来を描く",
        rating: 4.5,
      },
      {
        id: 5,
        title: "相席食堂",
        img: "https://cdn.javastorm.net/images/rick-and-morty.jpg",
        url: "https://eiga.com/movie/78321/",
        genre: 1,
        descriotion: "未来を描く",
        rating: 4.5,
      },
]

// export type ElementType<T extends ReadonlyArray<unknown>> = T extends ReadonlyArray<infer ElementType> ? ElementType : never;
export type Product = {
    id: number;
    title: string;
    img: string;
    url: string;
    genre: number;
    description: string;
    rating: number;
}
// export type Product = ElementType<typeof products>;