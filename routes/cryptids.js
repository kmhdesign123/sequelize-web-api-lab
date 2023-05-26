const router = require('express').Router()
const cryptidsCtrl = require('../controllers/cryptids.js')

router.post('/', cryptidsCtrl.create)
router.get('/', cryptidsCtrl.index)
router.put('/:cryptidId', cryptidsCtrl.update)
router.delete('/:cryptidId', cryptidsCtrl.delete)

module.exports = router