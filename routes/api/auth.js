const express = require("express");
const { joiUserSchema, joiResendMailSchema } = require("../../model");
const controlsWrapper = require("../../middlewares/controlsWrapper");
const validationSchema = require("../../middlewares/validationSchema");
const auth = require("../../middlewares/auth");
const uploads = require("../../middlewares/uploads");
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
router.patch(
  "/avatars",
  auth,
  uploads.single("avatar"),
  controlsWrapper(ctrl.updateAvatar)
);
router.get("/verify/:verificationToken", controlsWrapper(ctrl.verifyEmail));
router.post(
  "/verify",
  validationSchema(joiResendMailSchema),
  controlsWrapper(ctrl.resendVerifyEmail)
);

module.exports = router;
