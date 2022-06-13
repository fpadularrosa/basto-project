const { cows, deleteCows, postCow, updateCows } = require('../controllers/cow.controller');
const express = require('express');
const validate = require('../middlewares/validateData')
const { joiCowSchema: schema } = require('../models/Cow.schema')

const router = express();


router.get('/', cows);

router.delete('/:id', deleteCows);

router.post('/add', validate(schema), postCow);

router.patch('/:_id', validate(schema), updateCows);

module.exports = router