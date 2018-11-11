import React from "react";
import {Link} from "react-router-dom";

export default function CategoryItems(props) {
    let category = props.category;
    return(
        <tr>
            <td>{category.id}</td>
            <Link to={`/category/${category.id}`}><td>{category.name}</td></Link>
            <td>{category.branch}</td>  
        </tr>
       
    );
}