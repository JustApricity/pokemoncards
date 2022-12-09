const {Pokemon} = require('../models')
let types = ['', 'bug', 'dark', 'dragon', 'electric', 'fairy', 'fighting', 'fire', 'fighting', 'ghost', 'grass', 'ground', 'ice', 'normal', 'poison', 'psychic', 'rock', 'steel', 'water']
module.exports.viewAll = async function(req, res, next) {
    const cards = await Pokemon.findAll();
    let searchType = 'All';
    let searchTypes = ['All'];
    for (let i = 0; i<types.length; i++){
        searchTypes.push(types[i]);
    }
    res.render('index', {Pokemon, cards:searchTypes, searchType});
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
            moveCost1b: `/images/${req.body.moveCost1b}.png`,
            moveCost2b: `/images/${req.body.moveCost2b}.png`,
            moveCost3b: `/images/${req.body.moveCost3b}.png`,
            moveName2: req.body.moveName2,
            moveDMG2: req.body.moveDMG2,
            Weak1: `/images/${req.body.Weak1}.png`,
            Weak2: `/images/${req.body.Weak2}.png`,
            Weak3: `/images/${req.body.Weak3}.png`,
            Res1: `/images/${req.body.Res1}.png`,
            Res2: `/images/${req.body.Res2}.png`,
            Res3: `/images/${req.body.Res3}.png`,
            RetreatCost1: `/images/${req.body.RetreatCost1}.png`,
            RetreatCost2: `/images/${req.body.RetreatCost2}.png`,
            RetreatCost3: `/images/${req.body.RetreatCost3}.png`
        },
        {
            where:
                {
                    id: req.params.id
                }


        });
    res.redirect('/')
}

module.exports.deleteCard = async function(req, res) {
    await card.destroy(
        {
            where:
                {
                    id: req.params.id
                }

        })
    res.redirect('/');
}

module.exports.renderAddForm = function(req, res){
    const card = {
        name: "",
        hp: "",
        type: "",
        image: "",
        moveCost1a: "",
        moveCost2a: "",
        moveCost3a: "",
        moveName1: "",
        moveDMG1: "",
        moveCost1b: "",
        moveCost2b: "",
        moveCost3b: "",
        moveName2: "",
        moveDMG2: "",
        Weak1: "",
        Weak2: "",
        Weak3: "",
        Res1: "",
        Res2: "",
        Res3: "",
        RetreatCost1: "",
        RetreatCost2: "",
        RetreatCost3: ""
    };
    res.render('add', {card, types});
}

module.exports.addCard = async function(req, res) {
    const newPokemon = await Pokemon.create(
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
            moveCost1b: `/images/${req.body.moveCost1b}.png`,
            moveCost2b: `/images/${req.body.moveCost2b}.png`,
            moveCost3b: `/images/${req.body.moveCost3b}.png`,
            moveName2: req.body.moveName2,
            moveDMG2: req.body.moveDMG2,
            Weak1: `/images/${req.body.Weak1}.png`,
            Weak2: `/images/${req.body.Weak2}.png`,
            Weak3: `/images/${req.body.Weak3}.png`,
            Res1: `/images/${req.body.Res1}.png`,
            Res2: `/images/${req.body.Res2}.png`,
            Res3: `/images/${req.body.Res3}.png`,
            RetreatCost1: `/images/${req.body.RetreatCost1}.png`,
            RetreatCost2: `/images/${req.body.RetreatCost2}.png`,
            RetreatCost3: `/images/${req.body.RetreatCost3}.png`
        });
    console.log(newPokemon)
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