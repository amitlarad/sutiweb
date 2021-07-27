import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from '../Screens/Home';
import About from '../Screens/About';
import Contact from '../Screens/Contact';
import ShopByCategory from "../Screens/ShopByCategory";

const ApplicationRouting = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/shop-by-category/:categoryName/:categoryId" component={ShopByCategory} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
    </Router>
  );
};

export default ApplicationRouting;