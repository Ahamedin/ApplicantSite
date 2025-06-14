import { Router } from "express"
import { getAllblocks,getblock,createBooking, deleteBlock, createBlock, saveblock, getSavedBlocks, getSaveOneBlock, deleteSavedBlock, getBookDetails, searchBlocks } from "../controllers/productController.js";

const router = Router();

router.get("/modals", getAllblocks);
router.get("/booking",getBookDetails);
router.delete("/modals/:id", deleteBlock);
router.post("/modals", createBlock);
router.get("/search", searchBlocks);

router.post("/savepage",saveblock);
router.get("/savedpage",getSavedBlocks);
router.get("/savedpage/:id",getSaveOneBlock);
router.delete("/savedpage/:id",deleteSavedBlock);

router.get("/modals/:id", getblock);

router.post("/bookings", createBooking);

export default router;  