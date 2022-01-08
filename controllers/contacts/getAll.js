const { Contact } = require("../../model");

const getAll = async (req, res) => {
  const { _id } = req.user;
  const { page = 1, limit = 10, favorite = true } = req.query;
  const skip = (page - 1) * limit;
  const contacts = await Contact.find(
    { owner: _id, favorite: favorite },
    "_id name email phone favorite",
    { skip, limit: Number(limit) }
  ).populate("owner", "email");
  res.json({
    status: "Success",
    code: 200,
    data: {
      contacts,
    },
  });
};

module.exports = getAll;
