const {Pokemon} = require('../models')
let types = ['', 'bug', 'dark', 'dragon', 'electric', 'fairy', 'fighting', 'fire', 'fighting', 'ghost', 'gross', 'ground', 'ice', 'normal', 'poison', 'psychic', 'rock', 'steel', 'water']
module.exports.viewAll = async function(req, res, next) {
    const cards = await Pokemon.findAll();
    res.render('index', {cards, types});
}
module.exports.renderEditForm = async function(req, res, render) {
    const card = await Pokemon.findByPk(
        req.params.id
    );
    res.render('edit', {card, types});
}
module.exports.updateCard = async function(req, res) {
    await Pokemon.update(
        {
            name: req.body.name,
            hp: req.body.hp,
            type: `/images/${req.body.type}.png`,
            image: req.body.image,
            moveCost1a: `/images/${req.body.moveCost1a}.png`,
            moveCost2a: `/images/${req.body.moveCost2a}.png`,
            moveCost3a: `/images/${req.body.moveCost3a}.png`,
            moveName1: req.body.moveName1,
            moveDMG1: req.body.moveDMG1,
            moveCost1b: req.body.moveCost1b,
            moveCost2b: req.body.moveCost2b,
            moveCost3b: req.body.moveCost3b,
            moveName2: req.body.moveName2,
            moveDMG2: req.body.moveDMG2,
            Weak1: req.body.Weak1,
            Weak2: req.body.Weak2,
            Weak3: req.body.Weak3,
            Res1: req.body.Res1,
            Res2: req.body.Res2,
            Res3: req.body.Res3,
            RetreatCost1: req.body.RetreatCost1,
            RetreatCost2: req.body.RetreatCost2,
            RetreatCost3: req.body.RetreatCost3
        },
        {
            where:
                {
                    id: req.params.id
                }


        });
    res.redirect('/')
}
// module.exports.viewAll = function(req, res, next) {
//     const cards =[ {
//         id: 1,
//         name: 'Houndoom',
//         hp: 170,
//         type: '/images/fire.png',
//         image: 'https://static.pokemonpets.com/images/monsters-images-800-800/8229-Mega-Houndoom.webp',
//         moveCost1a: '/images/fire.png',
//         moveCost2a: '/images/fire.png',
//         moveCost3a: '',
//         moveName1: 'Inferno Fang',
//         moveDMG1: 80,
//         moveCost1b: '/images/fire.png',
//         moveCost2b: '/images/fire.png',
//         moveCost3b: '/images/normal.png',
//         moveName2: 'Vengeful Fang',
//         moveDMG2: 100,
//         Weak1: '/images/ground.png',
//         Weak2: '/images/rock.png',
//         Weak3: '/images/water.png',
//         Res1: '/images/fire.png',
//         Res2: '/images/bug.png',
//         Res3: '/images/steel.png',
//         RetreatCost1: '/images/normal.png',
//         RetreatCost2: '/images/normal.png',
//         RetreatCost3: '',
//     },