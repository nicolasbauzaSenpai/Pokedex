import Bulbasaur from '../Img-pokemones/bulbasaur.png'
import Charmander from '../Img-pokemones/charmander.png'
import Squirtle from '../Img-pokemones/squirtle.png'
import Butterfree from '../Img-pokemones/butterfree.png'
import Pikachu from '../Img-pokemones/pikachu.png'
import Gastly from '../Img-pokemones/gastly.png'
import Ditto from '../Img-pokemones/ditto.png'
import Mew from '../Img-pokemones/mew.png'
import Aron from '../Img-pokemones/aron.png'

const informacion = [
    {
        name: 'Bulbasaur',
        image: Bulbasaur,
        colors: ["#74CB48", "#A43E9E",],
        number: 1,
        type: ['Grass', 'Poison'],
        weight: 6.9,
        height: 0.7,
        moves: ['Chlorophyl', ' Overgrow'],
        description: 'There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.',
        stats: [45, 49, 49, 65, 65, 45],
    },

    {
        name: 'Charmander',
        image: Charmander,
        colors: ['#F57D31'],
        number: 2,
        type: ['Fire'],
        weight: 8.5,
        height: 0.6,
        moves: ['Mega-Punch', ' Fire-Punch'],
        description: 'It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail.',
        stats: [39, 52, 43, 60, 50, 65],
    },

    {
        name: 'Squirtle',
        image: Squirtle,
        colors: ['#6493EB'],
        number: 3,
        type: ['Water'],
        weight: 9.0,
        height: 0.5,
        moves: ['Torrent', ' Rain-Dish'],
        description: 'When it retracts its long neck into its shell, it squirts out water with vigorous force.',
        stats: [44, 48, 65, 50, 64, 43],
    },

    {
        name: 'Butterfree',
        image: Butterfree,
        colors: ["#A7B723", "#A891EC",],
        number: 4,
        type: ['Bug', 'Flying'],
        weight: 32.0,
        height: 1.1,
        moves: ['Compound-Eyes', ' Tinted-Lens'],
        description: 'In battle, it flaps its wings at great speed to release highly toxic dust into the air.',
        stats: [60, 45, 50, 90, 80, 70],
    },

    {
        name: 'Pikachu',
        image: Pikachu,
        colors: ['#F9CF30'],
        number: 5,
        type: ['Electric'],
        weight: 6.0,
        height: 0.4,
        moves: ['Mega-Puch', 'Pay-day'],
        description: 'Pikachu that can generate powerful electricity have cheek sacs that are extra soft and super stretchy.',
        stats: [35, 55, 40, 50, 50, 90],
    },

    {
        name: 'Gastly',
        image: Gastly,
        colors: ["#70559B", " #A43E9E",],
        number: 6,
        type: ['Ghost', 'Poison'],
        weight: 0.1,
        height: 1.3,
        moves: ['Levitate'],
        description: 'Born from gases, anyone would faint if engulfed by its gaseous body, which contains poison.',
        stats: [30, 35, 30, 100, 35, 80],
    },

    {
        name: 'Ditto',
        image: Ditto,
        colors: ['#AAA67F'],
        number: 7,
        type: ['Normal'],
        weight: 4.0,
        height: 0.3,
        moves: ['Limber', ' Imposter'],
        description: 'It can reconstitute its entire cellular structure to change into what it sees, but it returns to normal when it relaxes.',
        stats: [48, 48, 48, 48, 48, 48],
    },

    {
        name: 'Mew',
        image: Mew,
        colors: ['#FB5584'],
        number: 8,
        type: ['Psychic'],
        weight: 4.0,
        height: 0.4,
        moves: ['Synchronize'],
        description: 'When viewed through a microscope, this Pokémon’s short, fine, delicate hair can be seen',
        stats: [100, 100, 100, 100, 100, 100],
    },


    {
        name: 'Aron',
        image: Aron,
        colors: [" #B7B9D0", "#B69E31",],
        number: 9,
        type: ['Steel', 'Rock'],
        weight: 60.0,
        height: 0.4,
        moves: ['Sturdy', ' Rock-Head'],
        description: 'It eats iron ore - and sometimes railroad tracks - to build up the steel armor that protects its body.',
        stats: [50, 70, 100, 40, 40, 30],
    },

]

export default informacion