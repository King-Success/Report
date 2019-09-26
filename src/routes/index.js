import { Router } from "express";
import Controller from "../controller";

const router = Router();
const { allReports, updateReport, blockReport } = Controller;

router.get("/", allReports);
router.put("/reports/:reportId", updateReport);
router.get("/reports/:reportId/block", blockReport);

export default router;
