const { User, Profile } = require("../models");
const bcrypt = require("bcrypt");
const salt = 10;
const salts = bcrypt.genSaltSync(salt);
const get = async (req, res) => {
  try {
    const result = await User.findAll({
      include: [
        {
          model: Profile,
          as: "profile",
        },
      ],
    });
    return res.send(result);
  } catch (error) {
    return res.send(error);
  }
};

const store = async (req, res) => {
  let { name, email, password, gender } = req.body;
  password = await bcrypt.hash(password, salts);
  try {
    const finduser = await User.findOne({
      where: {
        email: email,
      },
    });
    if (finduser) {
      return res.send({
        message: "user already exist",
      });
    } else {
      const result = await User.create({
        name,
        email,
        password,
        gender,
      });
      return res.send({
        message: "user created sucessfully",
        result,
      });
    }
  } catch (error) {
    return res.send(error);
  }
};

const edit = async (req, res) => {
  const { id } = req.params;
  const { name, email, password, gender } = req.body;
  try {
    const oldUser = await User.findOne({
      where: {
        id: id,
      },
    });
    if (oldUser) {
      (oldUser.name = name),
        (oldUser.email = email),
        (oldUser.password = password),
        (oldUser.gender = gender);
      await User.save(oldUser);
    } else {
      return res.send({
        message: "user not found",
      });
    }
  } catch (error) {
    return res.send(error);
  }
};

const destory = async (req, res) => {
  const { id } = req.params;
  try {
    const findUser = await User.findOne({
      where: {
        id: id,
      },
    });
    if (!findUser) {
      return res.send({
        message: "user not found",
      });
    } else {
      const result = await User.destory({
        where: {
          id: id,
        },
      });
      return res.send({
        message: "user deleted sucessfully",
        result,
      });
    }
  } catch (error) {}
};

module.exports = {
  get,
  store,
  edit,
  destory,
};
