const express = require("express");
const controlsWrapper = require("../../middlewares/controlsWrapper");
const { contactSchema } = require("../../schemas");
const validationSchema = require("../../middlewares/validationSchema");
const { contacts: ctrl } = require("../../controllers");

const validateMiddleware = validationSchema(contactSchema);

const router = express.Router();

router.get("/", controlsWrapper(ctrl.getAll));

router.get("/:id", controlsWrapper(ctrl.getById));

router.post("/", validateMiddleware, controlsWrapper(ctrl.add));

router.put("/:id", validateMiddleware, controlsWrapper(ctrl.updateById));

router.delete("/:id", controlsWrapper(ctrl.removeById));

module.exports = router;
