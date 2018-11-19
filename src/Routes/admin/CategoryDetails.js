import React from "react";
import Category from "../../Components/admin/CategoryDetails.js";
import {
  CategoryDetailConsumer,
  CategoryDetailProvider
} from "../../Providers/admin/CategoryDetailsProvider.js";
export default function CategoryRoute(props) {
    const categoryId = props.match.params.id;
  return (
    <CategoryDetailProvider>
      <CategoryDetailConsumer>
        {value => (
          <Category
            category={value.state.category}
            handleOnSubmit={value.handleOnSubmit}
            handleOnChange={value.handleOnChange}
            getCategory = {()=>value.getCategoryById(categoryId)}
          />
        )}
      </CategoryDetailConsumer>
    </CategoryDetailProvider>
  );
}
