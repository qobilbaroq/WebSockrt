const { body } = require("express-validator")
const { authenticateJWT } = require("../middleware/authMiddleware")
const comment_ctrl = require("../controller/comment_ctrl")

module.exports = (app) => {
    const router = app.Router()

    router.get('/list', authenticateJWT, comment_ctrl.list)
    router.post('/comment', authenticateJWT, [
        body('content_comment_text').notEmpty(),
    ], comment_ctrl.save)
    return router
}

