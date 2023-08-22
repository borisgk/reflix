export const POSTER_BASE_URL = "https://image.tmdb.org/t/p/"
export const POSTER_SIZE = "w342"

export const BACKDROP_BASE_URL = "https://image.tmdb.org/t/p/"
export const BACKDROP_SIZE = "w1280"


const API_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YjY4NjgwZDI3MzVlYjdiMWVkNjIwZTQwZDNiMjYxMCIsInN1YiI6IjY0ZGNkYmNiMDAxYmJkMDQxYmY0NjhlOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.k5s-iKqNFJ4WNVJwWtC60LiS_vx0IuQ5GlB0GXQlBAA"
const API_KEY = "4b68680d2735eb7b1ed620e40d3b2610"
export const API_OPTIONS = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer ' + API_TOKEN
    }
}
export const API_QUERY = "https://api.themoviedb.org/3/discover/movie?include_adult=true&include_video=false&language=en-US&page=1&sort_by=popularity.desc"

export const NAV_ITEMS = [
    {
        label: "Home",
        link: "/"
    },
    {
        label: "Catalog",
        link: "catalog"
    }
]

export const USERS = [
    {
        id: 4491,
        name: "Jennifer",
        image: "user-images/user01.jpg",
        rentals: []
    },
    {
        id: 1016168,
        name: "Lily",
        image: "user-images/user02.jpg",
        rentals: []
    },
    {
        id: 3151,
        name: "Jack",
        image: "user-images/user03.jpg",
        rentals: []
    },
    {
        id: 21278,
        name: "Alan",
        image: "user-images/user04.jpg",
        rentals: []
    }
]