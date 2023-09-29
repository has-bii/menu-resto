import express from "express"
import UsersController from "../../controllers/user"

const userAPI = express.Router()

// Fetch all Users
userAPI.get("/", UsersController.getAllUsers)

// Edit
userAPI.put("/edit", UsersController.edit)

export default userAPI
