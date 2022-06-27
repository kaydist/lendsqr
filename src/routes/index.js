import React from "react";
// import { Route, Redirect } from "react-router-dom";
import { Route } from "react-router-dom";
import InAppLayout from "../layout/inAppLayout";

const AppRoute = ({ component: Component, isAuthProtected, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      // if (isAuthProtected && !(sessionStorage.getItem("AdminSharePass") || localStorage.getItem("AdminSharePass") )) {
      // 	return (
      // 		<Redirect to={{ pathname: "/login", state: { from: props.location } }} />
      // 	);
      // }

      return (
        <InAppLayout>
          <Component {...props} />
        </InAppLayout>
      );
    }}
  />
);

export default AppRoute;
