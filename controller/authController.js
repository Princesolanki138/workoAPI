import userService from "../services/userService.js";
import userDto from "../dtos/userDto.js";
import { createUserValidator, loginUserValidator, updateUserValidator } from "../validators/userValidators.js";



export const createUser = async (req, res) => {
  try {
    const { error } = createUserValidator(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const user = await userService.createUser(req.body);


    res.status(201).send({
      success: true,
      message: "user created successfully",
      userDto: new userDto(user)
    });

  } catch (error) {
    res.status(500).send(error);
    console.log("error in create user controller ")

  }
}

export const loginUser = async (req, res) => {
  const { error } = loginUserValidator(req.body)

  if (error) {
    return res.status(400).send(error.details[0].message);
  }
  try {

    const { email, password } = req.body;
    const { token, userr } = await userService.loginUser(email, password);

    res.status(200).send({
      success: true,
      message: "user login successfully",
      userDto: new userDto(userr),
      token
    });

  } catch (error) {
    res.status(500).send(error);
    console.log("error in login user controller ")

  }
}

export const updateUser = async (req, res) => {
  try {
    const { error } = updateUserValidator(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const user = await userService.updateUser(req.params.id, req.body);

    if (!user) {
      return res.status(404).send({
        success: false,
        message: "user not found",
      });
    }

    res.status(201).send({
      success: true,
      message: "user updated successfully",
      userDto: new userDto(user)
    })

  } catch (error) {

    res.status(500).send(error);
    console.log("error in update user controller ", error)

  }
}

export const getUserById = async (req, res) => {
  try {
    const user = await userService.getUserById(req.params.id);
    // console.log(user)
    if (!user) return res.status(404).send({
      success: false,
      message: "user not found",
    })

    res.status(200).send({
      success: true,
      message: "user found successfully",
      userDto: new userDto(user)
    });

  } catch (error) {
    res.status(500).send(error);
    console.log("error in getuserbyid user controller ")

  }
}

export const getAllUser = async (req, res) => {
  try {
    const users = await userService.getAllUser();
    res.status(200).send({
      success: true,
      message: "user found successfully",
      userDto: users.map((user) => new userDto(user))
    });

  } catch (error) {
    res.status(500).send(error);
    console.log("error in getalluser user controller ")

  }
}

export const softDeleteUser = async (req, res) => {
  try {
    const user = await userService.softDeleteUser(req.params.id);
    if (!user) return res.status(404).send({
      success: false,
      message: "user not found",
    })
    res.status(200).send({
      success: true,
      message: "user deleted successfully",
      userDto: new userDto(user)
    });

  } catch (error) {
    res.status(500).send(error);
    console.log("error in softdelete user controller ")

  }
}
