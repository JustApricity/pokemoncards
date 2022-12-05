const {card} = require('../models')
module.exports.viewAll = async function(req, res, next) {
    const cards = await card.findAll();
    res.render('index', {cards});
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
//     {
//         id: 2,
//         name: 'Test Pokemon',
//         hp: 0,
//         type: '',
//         image: 'https://static.pokemonpets.com/images/monsters-images-800-800/8229-Mega-Houndoom.webp',
//         moveCost1a: '',
//         moveCost2a: '',
//         moveCost3a: '',
//         moveName1: 'First Move',
//         moveDMG1: 0,
//         moveCost1b: '',
//         moveCost2b: '',
//         moveCost3b: '',
//         moveName2: 'Second Move',
//         moveDMG2: 0,
//         Weak1: '',
//         Weak2: '',
//         Weak3: '',
//         Res1: '',
//         Res2: '',
//         Res3: '',
//         RetreatCost1: '',
//         RetreatCost2: '',
//         RetreatCost3: '',
//     }];
//     res.render('index', {cards});
//
// }