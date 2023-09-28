import { Request, Response } from "express"
import prisma from "../lib/prisma"

interface ICategoryQuery {
    id?: string
    name?: string
}

export default class CategoryController {
    static async fetch(req: Request, res: Response) {
        try {
            const query: ICategoryQuery = req.query

            // Query with id
            if (query.id) {
                const data = await prisma.category.findUnique({ where: { id: parseInt(query.id) } })

                if (!data) {
                    res.status(404).json({
                        message: `Category with id ${query.id} does not exist.`,
                    })

                    return
                }

                res.status(200).json({ message: "Fetched successfully", data })
                return
            }

            // Query with name
            if (query.name) {
                const data = await prisma.category.findMany({
                    where: { name: { contains: query.name } },
                })

                res.status(200).json({ message: "Fetched successfully", data })
                return
            }

            // Fetch All
            const data = await prisma.category.findMany()

            res.status(200).json({ message: "Fetched category successfully.", data })
        } catch (error) {
            res.status(500).json({
                message: "Failed to fetch categories! Unexpected error has occurred.",
            })

            console.error("Failed to fetch categories!", error)
        }
    }

    static async create(req: Request, res: Response) {
        try {
            const name: string = req.body.name

            if (!name) {
                res.status(404).json({
                    message: "Name field is required",
                })

                return
            }

            const data = await prisma.category.create({ data: { name: name } })

            res.status(200).json({ message: "New category has been created.", data })
        } catch (error) {
            res.status(500).json({
                message: "Failed to create new category! Unexpected error has occurred.",
            })

            console.error("Failed to create new category!", error)
        }
    }

    static async edit(req: Request, res: Response) {
        try {
            const body: ICategoryQuery = req.body

            if (!body.id || !body.name) {
                res.status(404).json({
                    message: "ID and Name fileds are required",
                })

                return
            }

            await prisma.category
                .update({ where: { id: parseInt(body.id) }, data: { name: body.name } })
                .then(() => {
                    res.status(200).json({ message: "The category edited successfully" })
                })
                .catch((err) => {
                    console.error(err)
                    res.status(404).json({ message: "Failed to edit the category!" })
                })
        } catch (error) {
            res.status(500).json({
                message: "Failed to edit category! Unexpected error has occurred.",
            })

            console.error("Failed to edit category!", error)
        }
    }

    static async delete(req: Request, res: Response) {
        try {
            const paramId: string = req.params.id

            if (!paramId) {
                res.status(404).json({
                    message: "ID is required",
                })
                return
            }

            await prisma.category
                .delete({
                    where: { id: parseInt(paramId) },
                })
                .then((data) => {
                    res.status(200).json({ message: `${data.name} category has been deleted` })
                })
                .catch((err) => {
                    res.status(404).json({ message: "Failed to delete the category!" })
                })
        } catch (error) {
            res.status(500).json({
                message: "Failed to delete category! Unexpected error has occurred.",
            })

            console.error("Failed to delete category!", error)
        }
    }
}
