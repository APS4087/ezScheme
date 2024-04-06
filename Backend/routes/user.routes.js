import express from 'express';
import protectRoute from '../middleware/protectRoute.js';
import { getUser, addAdditionalInfo } from '../controllers/user.controller.js';

const router = express.Router();

router.get("/", protectRoute, getUser)

// Route to add additional information after user registration
router.post('/additional-info', protectRoute, addAdditionalInfo);



export default router;