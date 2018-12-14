const Pet = require('../models/models');

module.exports = {
    index: (req, res) => {
        Pet.find()
            .then(data => res.json(data))
            .catch(err => res.json(err))
    },

    show: (req, res) => {
        Pet.find({ _id: req.params.id })
            .then(data => res.json(data))
            .catch(err => res.json(err))
    },

    new: (req, res) => {
        Pet.create(req.body)
            .then(data => res.json(data))
            .catch(err => res.json(err))
    },

    edit: (req, res) => {
        Pet.findOneAndUpdate({ _id: req.params.id }, { $set: { name: req.body.name, type: req.body.type, description: req.body.description, skill1: req.body.skill1, skill2: req.body.skill2, skill3: req.body.skill3 }}, {runValidators: true, context: 'query'})
            .then(data => res.json(data))
            .catch(err => res.json(err))
    },

    like: (req, res) => {
        Pet.findOneAndUpdate({ _id: req.params.id }, { $set: { likes: req.body.likes }})
            .then(data => res.json(data))
            .catch(err => res.json(err))
    },

        delete: (req, res) => {
        Pet.findOneAndDelete({ _id: req.params.id })
            .then(data => res.json(data))
            .catch(err => res.json(err))
    }
};