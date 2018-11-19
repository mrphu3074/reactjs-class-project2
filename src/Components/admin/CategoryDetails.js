import React from "react";

export default class CategoryDetails extends React.Component {
  componentDidMount() {
    this.props.getCategory();
  }
  render() {
    return (
      <section className="forms">
        <div className="container-fluid">
          <header>
            <h1 className="display">
                {this.props.category.name}
            </h1>
          </header>
          <div className="row">
            <div className="col">
              <div className="card">
                <div className="card-body">
                  <form noValidate>
                    <div className="form-row">
                      <div className="form-group col col-md">
                        <label>Name</label>
                        <input
                          placeholder="Name"
                          className="form-control"
                          name="name"
                          value={this.props.category.name}
                          onChange={this.props.handleOnChange}
                        />
                      </div>
                      <div className="form-group col col-md">
                        <label>Branch name</label>
                        <select
                          className="form-control"
                          name="branch"
                          value={this.props.category.branch}
                          onChange={this.props.handleOnChange}
                        >
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
                        <button
                          type="submit"
                          className="btn btn-primary"
                          onClick={this.props.handleOnSubmit}
                        >
                          Save
                        </button>
                        <button type="submit" className="btn btn-secondary">
                          Cancel
                        </button>
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
}
