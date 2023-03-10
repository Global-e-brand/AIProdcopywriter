import mongoose from "mongoose";

const credentialStructure = mongoose.Schema({
  email: {
    type: String,
    require: true,
  },
  hashedPassword: {
    type: String,
    require: true,
  },
});

const credentials = mongoose.model("test_credentials", credentialStructure);
export default credentials;
