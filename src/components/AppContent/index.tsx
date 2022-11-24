import React from "react";

import { Route, Switch, Redirect } from "react-router-dom";

//pages
import MainPage, { routeMain as routeMainPage } from "pages/MainPage";
import About, { routeMain as routeAbout } from "pages/About";
import Areas, { routeMain as routeAreas } from "pages/Areas";
import Contacts, { routeMain as routeContacts } from "pages/Contacts";
import News, { routeMain as routeNews } from "pages/News";
import Products, { routeMain as routeProducts } from "pages/Products";

//components
import Header from "../Header";
import Footer from "../Footer";

//styles
import "./styles.scss";

const AppContent = () => {
  return (
    <div className="AppContent">
      <Header />
      <main>
        <Switch>
          <Route exact path={routeMainPage()} component={MainPage} />
          <Route exact path={routeAbout()} component={About} />
          <Route exact path={routeAreas()} component={Areas} />
          <Route exact path={routeContacts()} component={Contacts} />
          <Route exact path={routeNews()} component={News} />
          <Route exact path={routeProducts()} component={Products} />
          <Redirect
            to={{
              pathname: routeMainPage(),
            }}
          />
        </Switch>
      </main>
      <Footer />
    </div>
  );
};

export default AppContent;
