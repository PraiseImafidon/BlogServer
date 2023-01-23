import Blog from '../models/Blog'

export const getAllBlogs = async(req, res, next) => {
    let blogs;
    try{
        blogs = await Blog.find();
    }
    catch(err) {
        return console.log(err);
    }

    if(!blogs)
    return res.status(404).json({message:"No matching blog found"});

    return res.status(200).json({ blogs });
}
