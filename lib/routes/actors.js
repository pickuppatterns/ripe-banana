const { Router } = require('express');
const Actor = require('../models/Actor');

module.exports = Router()

  .post('/', (req, res, next) => {
    const { name, dob, pob } = req.body;
    Actor
      .create({
        name, 
        dob, 
        pob
      })
      .then(actor => res.send(actor))
      .catch(next);
  })
  .get('/', (req, res, next) => {
    Actor
      .find()
      .select('-__v -address')
      .then(actors => res.send(actors))
      .catch(next);  
  })
  .get('/:id', (req, res, next) => {
    Actor
      .findById(req.params.id)
      .then(actor => res.send(actor))
      .catch(next);
  })
  .delete('/:id', (req, res, next) => {
    Actor
      .findByIdAndDelete(req.params.id)
      .then(() => res.send({ deleted: true }))
      .catch(next);
  });
