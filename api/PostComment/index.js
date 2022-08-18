module.exports = async function (context, req) {
    if (!req.user) {
        throw new Error('Unauthorized');
    }

    const comment = req.body;
    comment.author = req.user.username;
    context.bindings.comment = comment;
    context.res = {
        status: 201,
        body: Object.assign({}, comment, { _ts: new Date() / 1000 })
    };
}