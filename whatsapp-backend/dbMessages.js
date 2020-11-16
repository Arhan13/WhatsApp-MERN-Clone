var mongoose = require("mongoose");
//import mongoose from "mongoose";

const whatsappSchema = mongoose.Schema({
  message: String,
  name: String,
  timestamp: String,
  received: Boolean,
});

//Collection
var Messages = mongoose.model("messagecontents", whatsappSchema);
//export default mongoose.model("messageContent", whatsappSchema);
module.exports = Messages;
