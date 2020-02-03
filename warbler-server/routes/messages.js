const express = require('express');
const router = express.Router({ mergeParams: true }); //mergeParams allows us to get the id
const { createMessage } = require('../handlers/messages');

router.route('/').post(createMessage);

module.exports = router;
