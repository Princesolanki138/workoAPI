import express from "express"

import { createUser, getAllUser, getUserById, loginUser, softDeleteUser, updateUser } from "../controller/authController.js";
import { authorization } from "../middleware/authMiddleware.js";



const router = express.Router();


router.post('/user', createUser)

//sigup to get token 
router.post('/userSignup', loginUser)

//update user 
router.put('/updateUser/:id', authorization, updateUser)
router.patch('/updateUser/:id', authorization, updateUser)

//get user by id 
router.get("/getuser/:id", authorization, getUserById)

//get alll user 
router.get("/getAllUser", authorization, getAllUser)

router.delete("/deleteUser/:id", authorization, softDeleteUser)

export default router;