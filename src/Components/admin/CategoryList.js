import React from "react";
import CategoryItems from "./CategoryItem.js";
import { Link } from "react-router-dom";
export default function CategoryList(props) {
    let list = props.list;
    let items = list.map(items => <CategoryItems category={items} />);
    return (
        <section class="charts">
            <div class="container-fluid">
                <header class="d-flex justify-content-between">
                    <h1 class="display">Categories</h1>
                    <div>
                        <Link class="btn btn-primary" to="/admin/categories/create">Create</Link>
                    </div>
                </header>
                <div class="row">
                    <div class="col">
                        <div class="card">
                            <div class="card-body">
                                <table class="table table-striped table-hover">
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Name</th>
                                            <th>Branch Name</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {items}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}