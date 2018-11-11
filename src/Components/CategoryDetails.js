import React from "react";

export default function CategoryDetails(props) {
    return (
        <section className="forms">
            <div className="container-fluid">
                <header>
                    <h1 className="display">Create Category</h1>
                </header>
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <div className="card-body">
                                <form noValidate>
                                    <div className="form-row">
                                        <div className="form-group col col-md">
                                            <label>Name</label>
                                            <input placeholder="Name" className="form-control" required />
                                        </div>
                                        <div className="form-group col col-md">
                                            <label>Branch name</label>
                                            <select className="form-control">
                                                <option>Choose option</option>
                                                <option>Nike</option>
                                                <option>Adidas</option>
                                                <option>Bitis</option>
                                                <option>New Balance</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col">
                                            <button type="submit" className="btn btn-primary">Save</button>
                                            <button type="submit" className="btn btn-secondary">Cancel</button>
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