import React, { Suspense } from "react";
import { MainLayout } from "../layout/index";
import { history } from "../../stores/_helpers/history";
import PropTypes from "prop-types";
import RouteEnum from "../../constants/RouteEnum";
import Toasts from "../components/common/toasts/Toasts";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Spin } from "antd";
import { DashboardContainer } from "views/containers/DashboardContainer";
import Sidebar from "../../views/components/common/layout/Sidebar";

export const RouteRegisterer = () => {
  return (
    // this.props.isRequesting
    <Spin spinning={false} tip="Loading..." className="spin-loading">
       {/* <Sidebar  />  */}
      <Router history={history}>
        <Suspense
          fallback={<Spin spinning tip="Loading..." className="spin-loading" />}
        >
          <Routes>
            <Route path={`${RouteEnum.Home}/*`} element={<MainLayout />} />
            <Route path={'/dashboard'} element={<DashboardContainer />} />
          </Routes>
        </Suspense>
        <Toasts />
      </Router>
    </Spin>
  );
};

RouteRegisterer.propTypes = {
  isRequesting: PropTypes.bool
};

export { RouteRegisterer as UnConnectedRoutes };
export default RouteRegisterer;
