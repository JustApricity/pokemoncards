module.exports.viewAll = function(req, res, next) {
    const card = {
        id: 1,
        name: 'Houndoom',
        hp: 170,
        type: '/images/fire.png',
        image: 'image',
        moveCost1a: '/images/fire.png',
        moveCost2a: '/images/fire.png',
        moveCost3a: '',
        moveName1: 'Inferno Fang',
        moveDMG1: 80,
        moveCost1b: '/images/fire.png',
        moveCost2b: '/images/fire.png',
        moveCost3b: '/images/normal.png',
        moveName2: 'Vengeful Fang',
        moveDMG2: 100,
        Weak1: '/images/ground.png',
        Weak2: '/images/rock.png',
        Weak3: '/images/water.png',
        Res1: '/images/fire.png',
        Res2: '/images/bug.png',
        Res3: '/images/steel.png',
        RetreatCost1: '/images/normal.png',
        RetreatCost2: '/images/normal.png',
        RetreatCost3: '',
    };
    res.render('index', {card});

}