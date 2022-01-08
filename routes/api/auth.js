const express = require("express");
const { joiUserSchema } = require("../../model");
const controlsWrapper = require("../../middlewares/controlsWrapper");
const validationSchema = require("../../middlewares/validationSchema");
const auth = require("../../middlewares/auth");
const { auth: ctrl } = require("../../controllers");

const router = express.Router();

router.post(
  "/signup",
  validationSchema(joiUserSchema),
  controlsWrapper(ctrl.register)
);
router.post(
  "/login",
  validationSchema(joiUserSchema),
  controlsWrapper(ctrl.login)
);
router.get("/current", auth, controlsWrapper(ctrl.getCurrent));
router.post("/logout", auth, controlsWrapper(ctrl.logout));
router.patch("/", auth, controlsWrapper(ctrl.updateSubscription));

module.exports = router;
