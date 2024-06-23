import userDao from "../doas/userDao.js";
import { comparePassd } from "../helpers/authHelper.js";
import JWT from "jsonwebtoken";

class userService {

  async createUser(user) {
    return await userDao.create(user);
  }
  async loginUser(email, password) {

    const userr = await userDao.getByEmail(email);
    if (!userr) {
      throw new Error("Invalid Email or Password");
    }

    const validpass = await comparePassd(password, userr.password)

    if (!validpass) {
      throw new Error("Invalid Email or Password");
    }

    const token = JWT.sign({ id: userr._id, email: userr.email }, process.env.JWT_SECRET, { expiresIn: "1d" })

    return { token, userr }
  }

  async getUserById(id) {
    return await userDao.getById(id);

  }
  async getAllUser() {
    return await userDao.getAll();
  }

  async updateUser(id, user) {
    return await userDao.updateById(id, user);
  }
  async softDeleteUser(id) {
    return await userDao.softDeleteById(id)
  }
}

export default new userService()