exports.getUserId = (req, res) => {
    const userId = req.params.userId
    res.send(
        {
            userId: userId
        }
    )
}