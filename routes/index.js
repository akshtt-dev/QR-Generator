import express from "express";
import { generateQR } from "../functions/generate-qr.js";
const router = express.Router();

router.use(express.urlencoded({ extended: true }));
router.use(express.json());

router.get("/", (req, res) => {
  res.render("home", { title: "Home" });
});

router.post("/generate-qr", async (req, res) => {
  const { url } = req.body;
  try {
    const qrcode = await generateQR(url);
    res.json({ qrCode: qrcode });
  } catch (error) {
    console.error("Error generating QR code:", error);
    res.status(500).json({ error: "QR code generation failed" });
  }
});

export default router;
