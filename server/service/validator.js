const validator = (req, res, next) => {
    // res.send('this is home')
    // res.status(200)

    if (req?.body?.password) {
        res.status(400).json({
            error: 'request not validated',
        });
        return;
    }
    next();
}

module.exports = validator