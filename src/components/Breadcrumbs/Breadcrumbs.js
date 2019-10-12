import React, { Component } from "react";
import {connect} from 'react-redux';
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Typography from "@material-ui/core/Typography";
import { Link as RouterLink } from "react-router-dom";
import { Route } from "react-router-dom";

 class BreadCrumbs extends Component {
  render() {    
    return (
      <Route>
        {({location }) => {
          const pathnames = location.pathname.split("/").filter(x => x);
          return (
            <Breadcrumbs aria-label="Breadcrumb">
              <RouterLink color="inherit" to="/">
                Home
              </RouterLink>
              {pathnames.map((value, index) => {
                const last = index === pathnames.length - 1;
                const to = `/${pathnames.slice(0, index + 1).join("/")}`;

                return last ? (
                  <Typography color="textPrimary" key={to}>
                    {value}
                  </Typography>
                ) : (
                  <RouterLink color="inherit" to="/" key={to}>
                    {value}
                  </RouterLink>
                );
              })}
            </Breadcrumbs>
          );
        }}
      </Route>
    );
  }
}
const mapStateToDrops=(state) => {
    return {
        courseDetail : state.courseDetail
    }
}
export default connect(mapStateToDrops)(BreadCrumbs);