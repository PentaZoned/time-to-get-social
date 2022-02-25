const router = require('express').Router();
const {
    getThoughts,
    getSingleThought,
    createThought,
    updateThought,
    deleteThought
} = require('../../controllers/thoughtController');

// /api/thoughts
router.use('/').get(getThoughts).post(createThought);

// /api/thoughts/:thoughtId
router.use('/:thoughtId').get(getSingleThought).put(updateThought).delete(deleteThought);


module.exports = router;