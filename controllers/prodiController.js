const Prodi = require('../models/prodiModel');

exports.create = async (req, res) => {
  const { kode, nama } = req.body;
  const prodi = await Prodi.create({ kode, nama });
  res.status(201).json(prodi);
};

exports.getAll = async (req, res) => {
  res.json(await Prodi.find().sort({ kode: 1 }));
};