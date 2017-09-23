import React from "react";
import { Route, Link } from "react-router-dom";
import Locations from "./Locations";
import Categories from "./Categories";
import ViewLocation from "./ViewLocation";
import AddLocation from "./AddLocation";
import EditLocation from "./EditLocation";
import ViewCategory from "./ViewCategory";
import AddCategory from "./AddCategory";
import EditCategory from "./EditCategory";

const App = () => (
  <div>
    <header>
      <h1>
        my<span>Locations</span>
      </h1>
      <nav>
        <Link to="/">Locations</Link> | <Link to="/categories">Categories</Link>
      </nav>
    </header>
    <main>
      <Route exact path="/" component={Locations} />
      <Route exact path="/categories" component={Categories} />
      <Route exact path="/locations/view" component={ViewLocation} />
      <Route exact path="/locations/add" component={AddLocation} />
      <Route exact path="/locations/edit" component={EditLocation} />
      <Route exact path="/categories/view" component={ViewCategory} />
      <Route exact path="/categories/add" component={AddCategory} />
      <Route exact path="/categories/edit" component={EditCategory} />
    </main>
  </div>
);

export default App;
