import React, {useState, useEffect} from "react";
import { getAppCategories } from "../../Services/Homepage";
import HeaderTop from "./HeaderTop";
import TopMenuNav from "./TopMenuNav";

const Header = () => {
    const [showError, setShowError] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    const [menuCategories, setMenuCategories] = useState([]);
    const getCategories = () => {
        return Promise.all([
            getAppCategories(),
        ]);
    };
    useEffect(() => {
        getCategories()
        .then(([categoriesData]) => {setMenuCategories(categoriesData)})
        .catch((err) => {console.log(err); setShowError(true);})
        .finally(() => {setShowMenu(true);})
    }, [])
  return (
    <header>
      <section className="top-section-bar">
        In accordance with government guidelines, we are shipping orders
        worldwide.
      </section>
      <div className="container-fluid">
        <HeaderTop/>
        <div className="flex-navigation">
          <section className="top-nav">
            <input id="menu-toggle" type="checkbox" />
            <label className="menu-button-container" for="menu-toggle">
              <div className="menu-button"></div>
            </label>
            {showMenu && <TopMenuNav categories={menuCategories}/>}
            {showError && <span class="text-danger">Menu is not loaded!</span>}
          </section>
        </div>
      </div>
    </header>
  );
}

export default Header;
