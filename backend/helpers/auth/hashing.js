import bcrypt from "bcrypt";

export const hashPassword = (password) => {
  const salt = bcrypt.genSaltSync();
  return bcrypt.hashSync(password, salt);
};

export const getHashedOTP = async (otp) => {
  const hashedOTP = await bcrypt.hash(otp, 10);

  return hashedOTP;
};

export const compare = (raw, hash) => {
  return bcrypt.compareSync(raw, hash);
};
