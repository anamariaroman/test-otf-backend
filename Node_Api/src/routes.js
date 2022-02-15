const { Router } = require('express')

const UserController = require('./app/Controllers/UserController')

const routes = new Router();

routes.post("/user", UserController.publish)
routes.get("/user", async (req,res) => {
    const show = await UserController.show()
    res.status(200).json(show)
})
routes.delete('/user/:id', UserController.remove)
routes.patch('/user/:id', UserController.update)

module.exports = routes