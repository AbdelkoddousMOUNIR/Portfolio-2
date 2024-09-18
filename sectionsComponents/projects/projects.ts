import abdoshop from '@/imgs/abdoShop.jpg';
import restaurant from '@/imgs/restaurant.jpg';
import doit from '@/imgs/doit.jpg';
import nikestore from '@/imgs/nikestore.jpg';
import { project } from '@/types/types';

export const projects: project[] = [
    {
        projectName: 'Abdo Shop',
        projectImage : abdoshop,
        projectLink: 'https://italianfoodrestaurant.netlify.app',
    },
    {
        projectName: 'Restaurant',
        projectImage: restaurant ,
        projectLink: 'https://abdoshop.netlify.app',
    },
    {
        projectName: 'DoIt',
        projectImage : doit,
        projectLink: 'https://doitproject.netlify.app',
    },
    {
        projectName: 'Nike Store',
        projectImage : nikestore,
        projectLink: 'https://nikestoreproject.netlify.app',
    },
]