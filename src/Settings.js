export const POSTER_BASE_URL = "https://image.tmdb.org/t/p/"
export const POSTER_SIZE = "w342"

const API_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YjY4NjgwZDI3MzVlYjdiMWVkNjIwZTQwZDNiMjYxMCIsInN1YiI6IjY0ZGNkYmNiMDAxYmJkMDQxYmY0NjhlOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.k5s-iKqNFJ4WNVJwWtC60LiS_vx0IuQ5GlB0GXQlBAA"
const API_KEY = "4b68680d2735eb7b1ed620e40d3b2610"
export const API_OPTIONS = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer ' + API_TOKEN
    }
}

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
        image: "user-images/user01.jpg"
    },
    {
        id: 2,
        name: "Lily",
        image: "user-images/user02.jpg"
    },
    {
        id: 3,
        name: "Jack",
        image: "user-images/user03.jpg"
    },
    {
        id: 4,
        name: "Alan",
        image: "user-images/user04.jpg"
    }
]