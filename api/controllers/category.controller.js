import Category from "../models/categories.model.js";

export const getAllCategories = async (req, res, next) => {
  try {
    let categories = await Category.find({ isDeleted: false });
    return res.json(categories);
  } catch (error) {
    next(error);
  }
};
export const addCategory = async (req, res, next) => {
  try {
    console.log(req.body);
    const { title, description } = req.body;
    let category = await Category.findOne({ title });
    if (!category) {
      category = await Category.create({ title, description });
    }
    console.log(category);
    return res.json(category);
  } catch (error) {
    next(error);
  }
};
