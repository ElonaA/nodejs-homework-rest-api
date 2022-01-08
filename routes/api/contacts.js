const express = require("express");
const { joiContactSchema, joiStatusSchema } = require("../../model");
const controlsWrapper = require("../../middlewares/controlsWrapper");
const validationSchema = require("../../middlewares/validationSchema");
const auth = require("../../middlewares/auth");

const { contacts: ctrl } = require("../../controllers");

const router = express.Router();

router.get("/", auth, controlsWrapper(ctrl.getAll));

router.get("/:id", auth, controlsWrapper(ctrl.getById));

router.post(
  "/",
  auth,
  validationSchema(joiContactSchema),
  controlsWrapper(ctrl.add)
);

router.put(
  "/:id",
  auth,
  validationSchema(joiContactSchema),
  controlsWrapper(ctrl.updateById)
);

router.patch(
  "/:id/favorite",
  auth,
  validationSchema(joiStatusSchema),
  controlsWrapper(ctrl.updateStatusContact)
);

router.delete("/:id", auth, controlsWrapper(ctrl.removeById));

module.exports = router;
