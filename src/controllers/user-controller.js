import User from '../../models/User';
import bcrypt from 'bcryptjs';

export const getAllUser = async (req, res, next ) => {
    let users;
    try{
        users = await User.find();
    }
    catch(err) {
        console.log(err);
    }
    if (!users) {
        res.status(404).json({ message: "Users not found"});
    }
    return res.status(200).json({ users });
}

export const signUp = async (req, res, next ) => {
    const { firstName, lastName, userName, email, password } = req.body;

    let existingUser;
    try{
        existingUser =  await User.findOne({ email }); //check if the user already exists first
    }
    catch(err) {
        return console.log(err);
    }
    if(existingUser) {
        res.status(400).json({ message: "User already exists! Please log in instead."});
    }
    const hashedpassword = bcrypt.hashSync(password);

    const user = new User({
        firstName,
        lastName,
        userName,
        email,
        password: hashedpassword,
    });
    try{
        await user.save();
    }catch(err) {
        return console.log(err);
    }
    return res.status(201).json({ user }); //201 = created
}
