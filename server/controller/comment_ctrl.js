const { validationResult } = require("express-validator")
const {post , user} = require("../models")
const self = {}

self.save = async (req, res) => {
    let errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(422).json(errors)
    }

    const {
        content_comment_text,
        post_id
    } = req.body

    await post.create({
        content_comment_text: content_comment_text, post_id: post_id,
        user_id: req?.user?.data?.id,
    })

    res.status(201).send({
        message: "post created successfully"
    })
}


// self.list = async (_, res) => {
//     let data = await post.findAll({
//         include: [{
//             model: user,
//             attributess: ['username']
//         }]
//     })

//     res.status(200).json({
//         message: 'post is found',
//         data: data
//     })
// }


module.exports = self