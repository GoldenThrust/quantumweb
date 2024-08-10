export default function constructFullURL(req, res, next) {
    req.fulUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
    next()
}