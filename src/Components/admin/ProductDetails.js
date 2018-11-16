import React from "react";
function ProductDetails(props) {
    return (
        <section className="forms">
            <div className="container-fluid">
                <header>
                    <h1 className="display">Create Product</h1>
                </header>
                <div class="row">
                    <div class="col">
                        <div class="card">
                            <div class="card-body">
                                <form novalidate>
                                    <div class="form-row">
                                        <div class="form-group col col-md">
                                            <label>Name</label>
                                            <input placeholder="Name" class="form-control" required />
                                        </div>
                                        <div class="form-group col col-md">
                                            <label>Introduction</label>
                                            <input placeholder="Intro" class="form-control" />
                                        </div>
                                    </div>
                                    <div class="form-row">
                                        <div class="form-group col col-md">
                                            <label>Price</label>
                                            <input placeholder="Price" class="form-control" />
                                        </div>
                                        <div class="form-group col col-md">
                                            <label>Category</label>
                                            <select class="form-control">
                                                <option>Choose option</option>
                                                <option>option 1</option>
                                                <option>option 2</option>
                                                <option>option 3</option>
                                                <option>option 4</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="form-row">
                                        <div class="form-group col col-md">
                                            <label>Image</label>
                                            <input placeholder="URL" class="form-control" />
                                        </div>
                                    </div>
                                    <div class="form-row">
                                        <div class="form-group col col-md">
                                            <label>Content</label>
                                            <textarea placeholder="Content" class="form-control" rows="5"></textarea>
                                        </div>
                                    </div>
                                    <div class="form-row">
                                        <div class="form-group col">
                                            <button type="submit" class="btn btn-primary">Save</button>
                                            <button type="submit" class="btn btn-secondary">Cancel</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}

export default ProductDetails;