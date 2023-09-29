import { Request, Response } from "express"
import { IUser } from "../types/global"
import prisma from "../lib/prisma"
import bcrypt from "bcrypt"
import { env } from "../lib/env"

const USER = prisma.user

interface IEditBody {
    name?: string
    email?: string
    password: string
    newPassword?: string
}

class UsersController {
    static async getAllUsers(req: Request, res: Response) {
        try {
            const user: IUser = req.body.user

            if (user.role === "USER") {
                res.status(403).json({ message: "Permission denied!" })
                return
            }

            // Retrieving all Users
            const data = await USER.findMany({
                select: {
                    id: true,
                    name: true,
                    email: true,
                    role: true,
                    isVerified: true,
                    picture: true,
                    createdAt: true,
                    updatedAt: true,
                },
            })

            res.status(200).json({
                message: "Users data has been fetched successfully.",
                data,
            })
        } catch (error) {
            res.status(500).json({
                message: "Failed to fetch Users data!",
                data: [],
            })

            console.error("Failed to fetch Users data\nError: ", error)
        }
    }

    static async edit(req: Request, res: Response) {
        try {
            const body: IEditBody = req.body

            const user: IUser = req.body.user

            if (!body.password) {
                res.status(400).json({ message: "Password is required!" })

                return
            }

            const userData = await USER.findUnique({ where: { id: user.id } })

            if (!userData) {
                res.status(404).json({ message: "User not found!" })

                return
            }

            if (!bcrypt.compareSync(body.password, userData.password)) {
                res.status(401).json({ message: "Invalid password!" })

                return
            }

            await prisma.user
                .update({
                    where: { id: user.id },
                    data: {
                        name: body.name,
                        email: body.email,
                        password: body.newPassword
                            ? bcrypt.hashSync(body.newPassword, env.SALT)
                            : userData.password,
                        updatedAt: new Date(),
                    },
                })
                .then(() => {
                    res.status(200).json({ message: "User has been edited successfully" })
                })
                .catch((err) => {
                    console.error("Failed to edit User\nError: ", err)
                    res.status(500).json({ message: "Failed to edit user!" })
                })
        } catch (error) {
            res.status(500).json({
                message: "Failed to edit User!",
            })

            console.error("Failed to edit User\nError: ", error)
        }
    }
}

export default UsersController
