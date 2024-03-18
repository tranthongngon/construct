import {INew} from '../../models'
import { loadImage } from '../../utils'

export const data:INew[] = [
    {
        id: 1,
        title: 'Bachelor of Architecture',
        brief: 'Lorem ipsum dolor sit amet, consectetr adipiscing elit. Adipiscing',
        date: '12-03-2020',
        img: loadImage('new_1.png')
    },
    {
        id: 2,
        title: 'Apartment Therapy',
        brief: 'Lorem ipsum dolor sit amet, consectetr adipiscing elit. Adipiscing',
        date: '24-12-2020',
        img: loadImage('new_2.png')
    },
    {
        id: 3,
        title: 'Unhappy Hipsters',
        brief: 'Lorem ipsum dolor sit amet, consectetr adipiscing elit. Adipiscing',
        date: '23-12-2020',
        img: loadImage('new_1.png')
    },
    {
        id: 5,
        title: 'Unhappy Hipsters',
        brief: 'Lorem ipsum dolor sit amet, consectetr adipiscing elit. Adipiscing',
        date: '23-12-2020',
        img: loadImage('new_5.jpeg')
    },
    {
        id: 4,
        title: 'Unhappy Hipsters',
        brief: 'Lorem ipsum dolor sit amet, consectetr adipiscing elit. Adipiscing',
        date: '23-12-2020',
        img: loadImage('new_4.jpeg')
    },
    {
        id: 6,
        title: 'Unhappy Hipsters',
        brief: 'Lorem ipsum dolor sit amet, consectetr adipiscing elit. Adipiscing',
        date: '23-12-2020',
        img: loadImage('new_6.jpeg')
    },
]