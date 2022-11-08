import { CategoryContainer, CategoryTitle } from "./category.styles";
import { useState, useEffect } from "react";
import ProductCard from "../../components/product-card/product-card.component";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Spinner from "../../components/spinner/spinner.component";
import {
  selectCategoriesMap,
  selectCategoriesIsLoading,
} from "../../store/categories/category.selector";

type categoryRouteParams = {
  category: string;
};

const Category = () => {
  const { category } = useParams<
    keyof categoryRouteParams
  >() as categoryRouteParams;
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <>
      <CategoryTitle as="h2">{category.toUpperCase()}</CategoryTitle>
      {isLoading ? (
        <Spinner />
      ) : (
        <CategoryContainer>
          {/* Since products are fetched async, we need to add a safegard to ensure that we render the html below only when we receive the data */}
          {products &&
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </CategoryContainer>
      )}
    </>
  );
};

export default Category;
