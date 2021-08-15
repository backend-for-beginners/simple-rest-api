import * as express from "express";
import person from "./api/person/person.router";
const router = express.Router();

router.get("/health", (req, res) => {
    res.status(200);
    res.send("OK");
});

router.use("/person", person);
export default router;