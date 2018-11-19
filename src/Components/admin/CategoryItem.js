import React from "react";
import {Link} from "react-router-dom";

export default function CategoryItems(props) {
    let category = props.category;
    return(
        <tr>
            <td>{category._id}</td>
            <Link to={`/admin/categories/${category._id}`}><td>{category.name}</td></Link>
            <td>{category.branch}</td>  
        </tr>
       
    );
}