import React from "react";
import {Route,Switch} from "react-router-dom";

import Cart from "./components/Cart/Cart";
import Details from "./components/Details/Details";
import Landing from "./components/Landing/Landing";
import Shop from "./components/Shop/Shop";

export default (
   <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/shop" component={Shop} />
        <Route path="/details/:name" component={Details} />
        <Route path="/cart" component={Cart} />
   </Switch>
);
