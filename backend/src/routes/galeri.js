const express = require("express");
const router = express.Router();
const {
  getAllGallery,
  getGalleryById,
  createGallery,
  updateGallery,
  deleteGallery,
} = require("../controllers/galeriController");
const upload = require("../middlewares/upload");

router.get("/", getAllGallery);
router.get("/:id", getGalleryById);
router.post("/", upload.single("image"), createGallery);
router.put("/:id", upload.single("image"), updateGallery);
router.delete("/:id", deleteGallery);

module.exports = router;