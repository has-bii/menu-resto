import express from "express"
import CategoryController from "../../controllers/category"

const categoryAPI = express.Router()

// Fetch category
categoryAPI.get("/", CategoryController.fetch)

// Create new
categoryAPI.post("/create", CategoryController.create)

export default categoryAPI
