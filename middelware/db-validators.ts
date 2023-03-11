import User from '../models/user';

export const emailExists = async (email: string) => {
  const validateEmail = await User.findOne({ email });

  if (validateEmail) {
    throw new Error(`Email ${email} already exists`);
  }
};

export const userExistById = async (id: string) => {
  const user = await User.findById(id);

  if (!user) {
    throw new Error(`User with ${id} not exists`);
  }
};
