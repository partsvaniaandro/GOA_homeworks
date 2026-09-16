exports.getPostId = (req, res) => {
    const userId = req.params.userId
    const postId = req.params.postId
    res.send(
        {
            userId: userId,
            postId: postId
        }
    )
}