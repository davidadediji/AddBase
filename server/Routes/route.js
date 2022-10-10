const router = require('express').Router();

router.get('/', (req, res, next) => {
    axios('url', {object})
	res.send('I am inside a router');
});

router.get('/:id', (req, res, next) => {
	res.send(`I am inside router ${req.params.id}`);
});


module.exports = router;