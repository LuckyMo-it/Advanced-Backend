import express from 'express'
import db from '../db.js'
import prisma from '../prismaClient.js'

const router = express.Router()

// Get all todos for logged-in user
router.get('/', async(req, res) => {
    const todos=await prisma.todo.findMany({
        where:{
            userId:req.userId
        }
    })
    res.json(todos)
})

// Create a new todo
router.post('/',async (req, res) => {
    const { task } = req.body
    const todo=await prisma.todo.create({
        data:{
            task,
            userId:req.userId
        }
    })

    res.json(todo)
})

// Update a todo
router.put('/:id', async(req, res) => {
    const { completed } = req.body
    const { id } = req.params
    const { page } = req.query

    const updateTodo=await prisma.todo.update({
        where:{
            id:parseInt(id)
        }
    })
    res.json({ message: "Todo completed" })
})

// Delete a todo
router.delete('/:id', async(req, res) => {
    const { id } = req.params
    const userId = req.userId
    
    
    res.send({ message: "Todo deleted" })
})

export default router