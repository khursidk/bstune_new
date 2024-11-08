// ArtistRelocation.route.js
import { Router } from "express";
import { addRelocation, getAllRelocation, deleteRelocation } from "../controller/ArtistRelocation.controller.js";

const router = Router();

router.post("/", addRelocation);
router.get("/", getAllRelocation);
router.delete("/:id", deleteRelocation);

export default router;
