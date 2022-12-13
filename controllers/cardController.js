const {Pokemon} = require('../models')
let types = ['none', 'bug', 'dark', 'dragon', 'electric', 'fairy', 'fighting', 'fire', 'fighting', 'ghost', 'grass', 'ground', 'ice', 'normal', 'poison', 'psychic', 'rock', 'steel', 'water']
// //    fix this and then display images
module.exports.viewCards = async function(req, res) {
    let searchTypes = ['all']
    for (let i = 0; i < types.length; i++) {
        searchTypes.push(types[i]);
    }
    let search
    let searchType = req.query.type || 'all';
    let searchRandom = req.query.random || false;
    if (searchType === 'all') {
        search = await Pokemon.findAll();
    } else {
        search = await Pokemon.findAll( {
          where: {
              type: searchType
          }
        });
    }
    if (search.length > 0 && searchRandom) {
        let randomIndex = getRandomInt(search.length);
        search = [search[randomIndex]];
    }
    res.render('index', {search, types:searchTypes, searchType, searchRandom});
}
function getRandomInt(max){
    return Math.floor(Math.random() * max);
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
            type: req.body.type,
            image: req.body.image,
            moveCost1a: req.body.moveCost1a,
            moveCost2a: req.body.moveCost2a,
            moveCost3a: req.body.moveCost3a,
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

module.exports.deleteCard = async function(req, res) {
    await Pokemon.destroy(
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
        type: types[0],
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
            type: req.body.type,
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
            Weak1: checkNull(`/images/${req.body.Weak1}.png`),
            Weak2: checkNull(`/images/${req.body.Weak2}.png`),
            Weak3: checkNull(`/images/${req.body.Weak3}.png`),
            Res1: checkNull(`/images/${req.body.Res1}.png`),
            Res2: checkNull(`/images/${req.body.Res2}.png`),
            Res3: checkNull(`/images/${req.body.Res3}.png`),
            RetreatCost1: checkNull(`/images/${req.body.RetreatCost1}.png`),
            RetreatCost2: checkNull(`/images/${req.body.RetreatCost2}.png`),
            RetreatCost3: checkNull(`/images/${req.body.RetreatCost3}.png`)
        });
    console.log(newPokemon)
    res.redirect('/')
}

function checkNull(input) {
    if (input == 'none') {
        return null
    } else {
        return input
    }
}