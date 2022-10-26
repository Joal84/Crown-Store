import { creatAction } from "../../utils/reducer/reducer.utils";
import { CATEGORIES_ACTION_TYPES } from "./category.types";

export const setCategories = (categoriesArray) =>
  creatAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES, categoriesArray);
