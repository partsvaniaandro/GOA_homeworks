exports.getWelcome = (req, res) => {
    res.send({
        content: ['hello express!']
    })
}