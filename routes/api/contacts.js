const express = require("express");
const controlsWrapper = require("../../middlewares/controlsWrapper");
const { joiContactSchema, joiStatusSchema } = require("../../model");
const validationSchema = require("../../middlewares/validationSchema");
const { contacts: ctrl } = require("../../controllers");

const router = express.Router();

router.get("/", controlsWrapper(ctrl.getAll));

router.get("/:id", controlsWrapper(ctrl.getById));

router.post("/", validationSchema(joiContactSchema), controlsWrapper(ctrl.add));

router.put(
  "/:id",
  validationSchema(joiContactSchema),
  controlsWrapper(ctrl.updateById)
);

router.patch(
  "/:id/favorite",
  validationSchema(joiStatusSchema),
  controlsWrapper(ctrl.updateStatusContact)
);

router.delete("/:id", controlsWrapper(ctrl.removeById));

module.exports = router;
