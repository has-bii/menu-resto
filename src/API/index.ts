import express from "express"
import userAPI from "./user"
import authAPI from "./auth"
import categoryAPI from "./category"
import Middleware from "../middleware/verifyToken"

const router = express.Router()

router.use("/auth", authAPI)

router.use(Middleware.verifyToken)

router.use("/user", userAPI)

router.use("/category", categoryAPI)

export default router
