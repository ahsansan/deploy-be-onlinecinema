const { tbFilm, tbCategory, tbUser, tbTransaction } = require("../../models");
const fs = require("fs");
const cloudinary = require("../utils/cloudinary");

exports.getFilms = async (req, res) => {
  try {
    let dataFilms = await tbFilm.findAll({
      include: [
        {
          model: tbCategory,
          as: "category",
          attributes: {
            exclude: ["createdAt", "updatedAt"],
          },
        },
      ],
      attributes: {
        exclude: ["createdAt", "updatedAt", "categoryId"],
      },
    });

    dataFilms = JSON.parse(JSON.stringify(dataFilms));

    const AllFilm = dataFilms.map((films) => {
      return {
        ...films,
      };
    });

    res.status(200).send({
      status: "success",
      data: {
        film: AllFilm,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({
      status: "failed",
      message: "Server Error",
    });
  }
};

exports.getFilm = async (req, res) => {
  const id = req.params.id;

  try {
    const dataFilm = await tbFilm.findOne({
      where: {
        id: id,
      },
      include: [
        {
          model: tbCategory,
          as: "category",
          attributes: {
            exclude: ["createdAt", "updatedAt"],
          },
        },
      ],
      attributes: {
        exclude: ["createdAt", "updatedAt", "idCategory"],
      },
    });

    if (!dataFilm) {
      return res.status(403).send({
        status: "failed",
        message: "data not found",
      });
    }

    res.status(200).send({
      status: "success",
      data: { film: dataFilm },
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      status: "failed",
      message: "server error",
    });
  }
};

exports.addFilm = async (req, res) => {
  try {
    const path = process.env.UPLOAD_PATH;
    const result = await cloudinary.uploader.upload(req.file.path, {
      folder: "OnlineCinemaAhsan",
      use_filename: true,
      unique_filename: false,
    });

    const dataFilm = await tbFilm.create({
      ...req.body,
      tumbnail: path + result.public_id,
    });
    const { id } = dataFilm;

    const findFilm = await tbFilm.findOne({
      where: {
        id,
      },
      include: [
        {
          model: tbCategory,
          as: "category",
          attributes: {
            exclude: ["createdAt", "updatedAt"],
          },
        },
      ],
      attributes: {
        exclude: ["createdAt", "updatedAt", "categoryId"],
      },
    });
    res.status(200).send({
      status: "success",
      data: findFilm,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      status: "failed",
      message: "server error",
    });
  }
};

exports.updateFilm = async (req, res) => {
  try {
    const path = process.env.UPLOAD_PATH;
    const id = req.params.id;
    const body = req.body;
    const result = await cloudinary.uploader.upload(req.file.path, {
      folder: "OnlineCinemaAhsan",
      use_filename: true,
      unique_filename: false,
    });

    const findFilm = await tbFilm.findOne({
      where: {
        id: id,
      },
    });

    if (!findFilm) {
      return res.status(403).send({
        status: "failed",
        message: "data not found",
      });
    }

    const dataFilm = {
      ...body,
      tumbnail: path + result.public_id,
    };

    await tbFilm.update(dataFilm, {
      where: {
        id: id,
      },
    });

    const updateFilm = await tbFilm.findOne({
      where: {
        id: id,
      },
      include: [
        {
          model: tbCategory,
          as: "category",
          attributes: {
            exclude: ["createdAt", "updatedAt"],
          },
        },
      ],
      attributes: { exclude: ["updatedAt", "createdAt", "categoryId"] },
    });

    res.status(200).send({
      status: "Success",
      data: {
        film: updateFilm,
      },
    });
  } catch (error) {
    res.status(500).send({
      status: "failed",
      message: "server error",
    });
  }
};

exports.deleteFilm = async (req, res) => {
  try {
    const id = req.params.id;

    const findFilm = await tbFilm.findOne({
      where: {
        id: id,
      },
    });

    if (!findFilm) {
      return res.status(403).send({
        status: "failed",
        message: "Data not found",
      });
    }

    fs.unlink(`uploads/${findFilm.tumbnail}`, (err) => {
      if (err) {
        console.log(err);
      }
    });

    await tbFilm.destroy({
      where: {
        id: id,
      },
    });

    res.status(200).send({
      status: `${findFilm.title} deleted`,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      status: "failed",
      message: "server error",
    });
  }
};
