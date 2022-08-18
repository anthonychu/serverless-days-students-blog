module.exports = async function (context, req, comments) {
    context.res.body = comments;
}