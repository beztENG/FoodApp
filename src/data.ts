import { Food } from "./app/shared/models/food";

export const sample_foods: Food[] = [
    {
        id: '1',
        name: 'pizza',
        price: 9,
        cookTime:'40-50',
        favorite: true,
        origins: ['ITALY'],
        stars: 4.5,
        imageUrl: 'assets/pizza.jpg',
        tags: ['pizza'],
    },

    {
        id: '2',
        name: 'crispy fries',
        price: 5,
        cookTime:'10-15',
        favorite: false,
        origins: ['USA'],
        stars: 4.0,
        imageUrl: 'assets/crispy fries.jpg',
        tags: ['crispy fries'],
    },

    {
        id: '3',
        name: 'fries chicken',
        price: 5,
        cookTime:'10-15',
        favorite: false,
        origins: ['USA'],
        stars: 4.0,
        imageUrl: 'assets/fries chicken.jpg',
        tags: ['fries chicken'],
    },

    {
        id: '4',
        name: 'hamburger',
        price: 5,
        cookTime:'10-15',
        favorite: true,
        origins: ['USA'],
        stars: 5.0,
        imageUrl: 'assets/hamburger.jpg',
        tags: ['hamburger'],
    },

    {
        id: '5',
        name: 'soft drink',
        price: 5,
        cookTime:'5-6',
        favorite: true,
        origins: ['USA'],
        stars: 4.3,
        imageUrl: 'assets/soft drink.jpg',
        tags: ['soft drink'],
    },
]