import { Food } from "./app/shared/models/food";
import { Tag } from "./app/shared/models/tag";

export const sample_foods: Food[] = [
    {
        id: '1',
        name: 'Pizza',
        price: 9,
        cookTime:'40-50',
        favorite: true,
        origins: ['ITALY'],
        stars: 4.5,
        imageUrl: 'assets/pizza.jpg',
        tags: ['pizza','lunch', 'fastfood'],
    },

    {
        id: '2',
        name: 'Crispy Fries',
        price: 5,
        cookTime:'10-15',
        favorite: false,
        origins: ['USA'],
        stars: 4.0,
        imageUrl: 'assets/crispy fries.jpg',
        tags: ['crispy fries','fry','fastfood'],
    },

    {
        id: '3',
        name: 'Fries Chicken',
        price: 5,
        cookTime:'10-15',
        favorite: false,
        origins: ['USA'],
        stars: 4.0,
        imageUrl: 'assets/fries chicken.jpg',
        tags: ['fries chicken','fry','slowfood'],
    },

    {
        id: '4',
        name: 'Hamburger',
        price: 5,
        cookTime:'10-15',
        favorite: true,
        origins: ['USA'],
        stars: 5.0,
        imageUrl: 'assets/hamburger.jpg',
        tags: ['hamburger','dinner'],
    },

    {
        id: '5',
        name: 'Soft Drink',
        price: 5,
        cookTime:'5-6',
        favorite: true,
        origins: ['USA'],
        stars: 4.3,
        imageUrl: 'assets/soft drink.jpg',
        tags: ['soft drink','drink'],
    },
]

export const sample_tags:Tag[] = [
    {name: 'All', count: 5},
    {name: 'fastfood', count: 2},
    {name: 'drink', count: 1},
    {name: 'fry', count: 2},
    {name: 'dinner', count: 1},
    {name: 'lunch', count: 1},
    {name: 'slowfood', count: 1},
]