exports.getPostId = (req, res) => {
    res.send({
        content: [`userId: ${req.params.userId}`, `postId: ${req.params.postId}`]
    })
}