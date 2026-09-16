exports.getUserId = (req, res) => {
    res.send({
        content: [`userId: ${req.params.userId}`]
    })
}