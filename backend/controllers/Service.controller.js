
const { Service } = require("../models/Service.model")

const ServiceController = {
    getAll: async (req, res) => {
        try {
            const items = await Service.find()
            res.send(items)
        } catch (error) {
            res.status(404).send(error)
        }
    },
    getById: async (req, res) => {
        try {
            const { id } = req.params
            const item = await Service.findById(id)
            res.send(item)
        } catch (error) {
            res.status(404).send(error)
        }
    },
    add: async (req, res) => {
        try {
            const newBlog = new Service({ ...req.body })
            await newBlog.save()
            const items = await Service.find()
            res.send(items)
        } catch (error) {
            res.status(404).send(error)
        }
    },
    delete: async (req, res) => {
        try {
            const { id } = req.params
            await Service.findByIdAndDelete(id)
            const items = await Service.find()
            res.send(items)
        } catch (error) {
            res.status(404).send(error)
        }
    },
    edit: async (req, res) => {
        try {
            const { id } = req.params
            await Service.findByIdAndUpdate(id, { ...req.body })
            const items = await Service.find()
            res.send(items)
        } catch (error) {
            res.status(404).send(error)
        }
    }
}
module.exports = { ServiceController }
