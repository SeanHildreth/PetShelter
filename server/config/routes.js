const controller = require('../controllers/controller');

module.exports = (app) => {
    app.get('/api/pets', controller.index);
    app.post('/api/pet/new', controller.new);
    app.get('/api/pet/:id', controller.show);
    app.put('/api/pet/:id', controller.edit);
    app.put('/api/pet/like/:id', controller.like);
    app.delete('/api/pet/:id', controller.delete);
};