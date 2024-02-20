import { createContext, useContext, useEffect, useState } from "react";
import { categoryListService } from "../services/category/categoryService";

const ProductContext = createContext(null);

const ProductProvider = ({ children }) => {
  const [categoryList, setCategoryList] = useState([]);

  const fetchCategory = async () => {
    try {
      const {
        data: { categories },
      } = await categoryListService();
      setCategoryList(categories);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchCategory();
  }, []);

  return (
    <ProductContext.Provider value={{ categoryList }}>
      {children}
    </ProductContext.Provider>
  );
};

const useProducts = () => useContext(ProductContext);

export { ProductProvider, useProducts };
