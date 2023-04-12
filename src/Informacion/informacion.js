import Bulbasaur from '../Img-pokemones/bulbasaur.png'
import Charmander from '../Img-pokemones/charmander.png'
import Squirtle from '../Img-pokemones/squirtle.png'
import Butterfree from '../Img-pokemones/butterfree.png'
import Pikachu from '../Img-pokemones/pikachu.png'
import Gastly from '../Img-pokemones/gastly.png'
import Ditto from '../Img-pokemones/ditto.png'
import Mew from '../Img-pokemones/mew.png'
import Aron from '../Img-pokemones/aron.png'
import Ivysaur from '../Img-pokemones/Ivysaur.png'
import Venusaur from '../Img-pokemones/Venusaur.png'
import Charmeleon from '../Img-pokemones/Charmeleon.png'
import Charizard from '../Img-pokemones/Charizard.png'
import Wartortle from '../Img-pokemones/Wartortle.png'
import Blastoise from '../Img-pokemones/Blastoise.png'
import Caterpie from '../Img-pokemones/Caterpie.png'
import Metapod from '../Img-pokemones/Metapod.png'
import Weedle from '../Img-pokemones/Weedle.png'
import Kakuna from '../Img-pokemones/Kakuna.png'
import Beedrill from '../Img-pokemones/Beedrill.png'
import Pidgey from '../Img-pokemones/Pidgey.png'
import Pidgeotto from '../Img-pokemones/Pidgeotto.png'
import Pidgeot from '../Img-pokemones/Pidgeot.png'
import Raichu from '../Img-pokemones/Raichu.png'
import Haunter from '../Img-pokemones/Haunter.png'
import Gengar from '../Img-pokemones/Gengar.png'
import Lairon from '../Img-pokemones/Lairon.png'
import Aggron from '../Img-pokemones/Aggron.png'
import Mewtwo from '../Img-pokemones/Mewtwo.png'
import Eevee from '../Img-pokemones/Eevee.png'
import Vaporeon from '../Img-pokemones/Vaporeon.png'
import Jolteon from '../Img-pokemones/Jolteon.png'
import Flareon from '../Img-pokemones/Flareon.png'

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
        name: 'Ivysaur',
        image: Ivysaur,
        colors: ["#74CB48", "#A43E9E",],
        number: 2,
        type: ['Grass', 'Poison'],
        weight: 13.0,
        height: 1.0,
        moves: ['Overgrow', 'Chlorophyll'],
        description: 'Ivysaurs appearance is very similar to that of its pre-evolved form, Bulbasaur. It still retains the turquoise skin and spots, along with its red eyes.',
        stats: [60, 62, 63, 62, 65, 60],
    },

    {
        name: 'Venusaur',
        image: Venusaur,
        colors: ["#74CB48", "#A43E9E",],
        number: 3,
        type: ['Grass', 'Poison'],
        weight: 100.0,
        height: 2.0,
        moves: ['Overgrow', 'Chlorophyll'],
        description: 'Venusaur is a large, amphibian-like Pokémon that is somewhat similar in appearance to its pre-evolved forms, Ivysaur and Bulbasaur.',
        stats: [80, 82, 83, 82, 85, 80],
    },
    {
        name: 'Charmander',
        image: Charmander,
        colors: ['#F57D31'],
        number: 4,
        type: ['Fire'],
        weight: 8.5,
        height: 0.6,
        moves: ['Mega-Punch', ' Fire-Punch'],
        description: 'It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail.',
        stats: [39, 52, 43, 60, 50, 65],
    },

    {
        name: 'Charmeleon',
        image: Charmeleon,
        colors: ['#F57D31'],
        number: 5,
        type: ['Fire'],
        weight: 19.0,
        height: 1.1,
        moves: ['Blaze', ' Solar-Power'],
        description: 'Charmeleon is a small, bipedal, dinosaur-like Pokémon with an appearance similar to that of its pre-evolved form, Charmander.',
        stats: [58, 64, 58, 68, 64, 80],
    },

    {
        name: 'Charizard',
        image: Charizard,
        colors: ['#F57D31', '#A891EC'],
        number: 6,
        type: ['Fire', 'Flying'],
        weight: 90.0,
        height: 1.7,
        moves: ['Blaze', ' Solar-Power'],
        description: 'Charizard is a large, dragon-like Pokémon that differs greatly from its pre-evolved form. The red skin coloration of Charmeleon is no longer apparent, as Charizard appears to have reverted to the orange/yellow coloration of Charmander.',
        stats: [78, 74, 78, 76, 74, 100],
    },
    {
        name: 'Squirtle',
        image: Squirtle,
        colors: ['#6493EB'],
        number: 7,
        type: ['Water'],
        weight: 9.0,
        height: 0.5,
        moves: ['Torrent', ' Rain-Dish'],
        description: 'When it retracts its long neck into its shell, it squirts out water with vigorous force.',
        stats: [44, 48, 65, 50, 64, 43],
    },

    {
        name: ' Wartortle',
        image: Wartortle,
        colors: ['#6493EB'],
        number: 8,
        type: ['Water'],
        weight: 22.5,
        height: 1.0,
        moves: ['Torrent', ' Rain-Dish'],
        description: 'Wartortle is a small, bipedal, turtle-like Pokémon with a similar appearance to that of its pre-evolved form, Squirtle.',
        stats: [59, 63, 80, 65, 80, 58],
    },

    {
        name: 'Blastoise',
        image: Blastoise,
        colors: ['#6493EB'],
        number: 9,
        type: ['Water'],
        weight: 88.5,
        height: 1.6,
        moves: ['Torrent', ' Rain-Dish'],
        description: 'Blastoise are large, tortoise-like Pokémon with some features similar to those of its pre-evolved forms. Blastoise has a large blue body, cream-colored stomach, small fat arms and legs, and a large brown shell rimmed with white, featuring its water cannons.',
        stats: [79, 83, 100, 69, 87, 78],
    },

    {
        name: 'Caterpie',
        image: Caterpie,
        colors: ["#A7B723"],
        number: 10,
        type: ['Bug'],
        weight: 2.9,
        height: 0.3,
        moves: ['Shield Dust', 'Run Away'],
        description: 'Caterpie is a worm-like Pokémon that is mainly green in color with a tan underside. Just below its head are four, tiny legs that are used only for movement.',
        stats: [45, 30, 35, 20, 20, 45],
    },
    {
        name: 'Metapod',
        image: Metapod,
        colors: ["#A7B723"],
        number: 11,
        type: ['Bug'],
        weight: 9.9,
        height: 0.7,
        moves: ['Shed Skin'],
        description: 'Metapod is an insect-like Pokémon with an appearance similar to that of a green-colored chrysalis or cocoon.',
        stats: [50, 20, 55, 25, 25, 30],
    },
    {
        name: 'Butterfree',
        image: Butterfree,
        colors: ["#A7B723", "#A891EC",],
        number: 12,
        type: ['Bug', 'Flying'],
        weight: 32.0,
        height: 1.1,
        moves: ['Compound-Eyes', ' Tinted-Lens'],
        description: 'In battle, it flaps its wings at great speed to release highly toxic dust into the air.',
        stats: [60, 45, 50, 90, 80, 70],
    },

    {
        name: 'Weedle',
        image: Weedle,
        colors: ["#A7B723", '#A43E9E'],
        number: 13,
        type: ['Bug', 'Poison'],
        weight: 3.2,
        height: 0.3,
        moves: ['Shield Dust', 'Run Away'],
        description: 'Weedle is a small, insect-like Pokémon appearing as a brown caterpillar with large stingers on both its rear and head.',
        stats: [40, 35, 30, 20, 20, 50],
    },
    {
        name: 'Kakuna',
        image: Kakuna,
        colors: ["#A7B723", '#A43E9E'],
        number: 14,
        type: ['Bug', 'Poison'],
        weight: 10.0,
        height: 0.6,
        moves: ['Shed Skin'],
        description: 'Kakuna is an insect-like Pokémon with an appearance similar to that of a yellow chrysalis.',
        stats: [45, 25, 50, 25, 25, 35],
    },

    {
        name: 'Beedrill',
        image: Beedrill,
        colors: ["#A7B723", '#A43E9E'],
        number: 15,
        type: ['Bug', 'Poison'],
        weight: 29.5,
        height: 1.0,
        moves: ['Sniper ', 'Swarm'],
        description: 'Beedrill is an insect-like Pokémon with the appearance of a very large wasp. However, unlike a wasp, Beedrill only has four limbs, with the front-most limbs featuring two large, lance-like stingers.',
        stats: [65, 90, 50, 50, 45, 75],
    },

    {
        name: 'Pidgey',
        image: Pidgey,
        colors: ["#A891EC", '#AAA67F'],
        number: 16,
        type: ['Normal', 'Flying'],
        weight: 1.8,
        height: 0.3,
        moves: ['Keen Eye', 'Tangled Feet'],
        description: 'Pidgey resembles a small, plump-bodied bird. It is brown in color, with a cream-colored throat and belly.',
        stats: [40, 45, 40, 35, 35, 56],
    },

    {
        name: 'Pidgeotto',
        image: Pidgeotto,
        colors: ["#A891EC", '#AAA67F'],
        number: 17,
        type: ['Normal', 'Flying'],
        weight: 30.0,
        height: 1.1,
        moves: ['Keen Eye', 'Tangled Feet'],
        description: 'Pidgeotto resembles a small hawk and is brightly colored with red and yellow feathers.',
        stats: [63, 60, 55, 50, 50, 71],
    },

    {
        name: 'Pidgeot',
        image: Pidgeot,
        colors: ["#A891EC", '#AAA67F'],
        number: 18,
        type: ['Normal', 'Flying'],
        weight: 39.5,
        height: 1.5,
        moves: ['Keen Eye', 'Tangled Feet'],
        description: 'Pidgeot resembles a large, feathery bird with huge wings. It has a brightly colored crest and tail.',
        stats: [83, 80, 75, 60, 60, 101],
    },
    {
        name: 'Pikachu',
        image: Pikachu,
        colors: ['#F9CF30'],
        number: 19,
        type: ['Electric'],
        weight: 6.0,
        height: 0.4,
        moves: ['Mega-Puch', 'Pay-day'],
        description: 'Pikachu that can generate powerful electricity have cheek sacs that are extra soft and super stretchy.',
        stats: [35, 55, 40, 50, 50, 90],
    },

    {
        name: 'Raichu',
        image: Raichu,
        colors: ['#F9CF30'],
        number: 20,
        type: ['Electric'],
        weight: 30.0,
        height: 0.8,
        moves: ['Static', 'Lightning Rod'],
        description: 'Raichu is a rodent-like Pokémon, similar to its previous evolution forms.',
        stats: [60, 90, 55, 60, 60, 100],
    },

    {
        name: 'Gastly',
        image: Gastly,
        colors: ["#70559B", " #A43E9E",],
        number: 21,
        type: ['Ghost', 'Poison'],
        weight: 0.1,
        height: 1.3,
        moves: ['Levitate'],
        description: 'Born from gases, anyone would faint if engulfed by its gaseous body, which contains poison.',
        stats: [30, 35, 30, 100, 35, 80],
    },

    {
        name: 'Haunter',
        image: Haunter,
        colors: ["#70559B", " #A43E9E",],
        number: 22,
        type: ['Ghost', 'Poison'],
        weight: 0.1,
        height: 1.6,
        moves: ['Levitate'],
        description: 'Haunter is a purple, spiky, floating figure with triangular eyes, tiny pupils, fangs and disembodied, three-fingered, clawed hands.',
        stats: [45, 50, 45, 115, 55, 95],
    },

    {
        name: 'Gengar',
        image: Gengar,
        colors: ["#70559B", " #A43E9E",],
        number: 23,
        type: ['Ghost', 'Poison'],
        weight: 40.5,
        height: 1.5,
        moves: ['Levitate', 'Cursed Body '],
        description: 'Gengar is a shadow-like, round-bodied Pokémon with two large, pointed ears and short spikes lining its back.',
        stats: [60, 65, 60, 125, 65, 110],
    },

    {
        name: 'Ditto',
        image: Ditto,
        colors: ['#AAA67F'],
        number: 24,
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
        number: 25,
        type: ['Psychic'],
        weight: 4.0,
        height: 0.4,
        moves: ['Synchronize'],
        description: 'When viewed through a microscope, this Pokémon’s short, fine, delicate hair can be seen',
        stats: [100, 100, 100, 100, 100, 100],
    },

    {
        name: 'Mewtwo',
        image: Mewtwo,
        colors: ['#FB5584'],
        number: 26,
        type: ['Psychic'],
        weight: 122.0,
        height: 2.0,
        moves: ['Pressure', 'Unnerve'],
        description: 'Mewtwo is a bipedal feline-like Pokémon. Its appearance is loosely based on Mew, with a more of a mutated humanoid look in addition to its feline traits.',
        stats: [106, 110, 90, 100, 100, 130],
    },


    {
        name: 'Aron',
        image: Aron,
        colors: [" #B7B9D0", "#B69E31",],
        number: 27,
        type: ['Steel', 'Rock'],
        weight: 60.0,
        height: 0.4,
        moves: ['Sturdy', ' Rock-Head'],
        description: 'It eats iron ore - and sometimes railroad tracks - to build up the steel armor that protects its body.',
        stats: [50, 70, 100, 40, 40, 30],
    },

    {
        name: 'Lairon',
        image: Lairon,
        colors: [" #B7B9D0", "#B69E31",],
        number: 28,
        type: ['Steel', 'Rock'],
        weight: 120.0,
        height: 0.9,
        moves: ['Sturdy', ' Rock-Head'],
        description: 'It has a hard armor shell like Rhyhorn has. Its body is dark gray and its eyes are sky blue.',
        stats: [60, 90, 140, 50, 50, 40],
    },

    {
        name: 'Aggron',
        image: Aggron,
        colors: [" #B7B9D0", "#B69E31",],
        number: 29,
        type: ['Steel', 'Rock'],
        weight: 360.0,
        height: 2.1,
        moves: ['Rock-Head', 'Heavy Metal'],
        description: 'Aggron is best described as a monster. It bears a dark gray dragon-like appearance with iron plates over its entire body, horns over its eyes and claws; this Pokémon was built for battle.',
        stats: [70, 110, 180, 60, 60, 50],
    },

    {
        name: 'Eevee',
        image: Eevee,
        colors: ['#AAA67F'],
        number: 30,
        type: ['Normal'],
        weight: 6.5,
        height: 0.3,
        moves: ['Run Away', 'Adaptability'],
        description: 'Eevee is a small, fox-like creature with brown fur. Its muzzle is very catlike, with a small, black and triangular nose.',
        stats: [55, 55, 50, 48, 48, 55],
    },
    {
        name: 'Vaporeon',
        image: Vaporeon,
        colors: ['#6493EB'],
        number: 31,
        type: ['Water'],
        weight: 29.0,
        height: 1.0,
        moves: ['Water Absorb'],
        description: 'Vaporeon shares physical traits with aquatic animals and land creatures in appearance.',
        stats: [130, 65, 60, 110, 95, 65],
    },
    {
        name: 'Jolteon',
        image: Jolteon,
        colors: ['#F9CF30'],
        number: 32,
        type: ['Electric'],
        weight: 24.5,
        height: 0.8,
        moves: ['Volt Absorb', 'Quick Feet'],
        description: 'Jolteon is a quadruped mammalian Pokémon, covered in spiny bright yellow fur.',
        stats: [65, 65, 60, 110, 95, 130],
    },

    {
        name: 'Flareon',
        image: Flareon,
        colors: ['#AAA67F'],
        number: 32,
        type: ['Normal'],
        weight: 25.0,
        height: 0.9,
        moves: ['Flash Fire'],
        description: 'Flareon is a quadruped mammalian Pokémon.',
        stats: [65, 130, 60, 95, 110, 65],
    },

]

export default informacion