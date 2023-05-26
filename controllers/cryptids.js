const { Cryptid } = require('../models')

const create = async (req, res) => {
  try {
    const cryptid = await Cryptid.create(req.body)
    res.status(200).json(cryptid)
  } catch (error) {
    res.status(500).json(error)
  }
}

const index = async (req, res) => {
  try {
    const cryptids = await Cryptid.findAll()
    res.status(200).json(cryptids)
  } catch (error) {
    res.status(500).json(error)
  }
}

const update = async (req, res) => {
  try {
    const cryptid = await Cryptid.update(
      req.body,
      { where: { id: req.params.cryptidId }, returning: true }
    )
    res.status(200).json(cryptid)
  } catch (error) {
    res.status(500).json(error)
  }
}

const deleteCryptid = async (req, res) => {
  try {
    const cryptid = await Cryptid.findByPk(req.params.cryptidId)
    await cryptid.destroy()
    res.status(200).json(cryptid)
  } catch (error) {
    res.status(500).json(error)
  }
}

module.exports = {
  create,
  index,
  update,
  delete: deleteCryptid
}
