import React from "react";
import Categories from "../../Components/admin/CategoryList.js";
import {CategoryConsumer, CategoryProvider} from "../../Providers/admin/CategoryListProvider.js";

export default function CategoryList() {
    return(
        <CategoryProvider>
            <CategoryConsumer>
                {
                    value => (
                        <Categories 
                            loading = {value.state.loading}
                            list = {value.state.list}
                        />
                    )
                }
            
            </CategoryConsumer>
        </CategoryProvider>
    );
}