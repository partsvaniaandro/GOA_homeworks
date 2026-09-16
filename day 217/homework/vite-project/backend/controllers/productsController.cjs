exports.getProductsInfo = (req, res) => {
    const {page, limit} = req.query
    res.send(
        {
            page: page,
            limit: limit
        }
    )
}