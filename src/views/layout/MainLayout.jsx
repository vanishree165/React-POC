import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import PropTypes from "prop-types";
import { Spin } from "antd";
import RouteEnum from "../../constants/RouteEnum";
import { SampleContainer } from "../containers/index";

const MainLayout = (props) => {
  
  
  return (
    <Spin spinning={false} tip="Loading..." className="spin-loading">
      <div
        className="Datacontent">
        <Suspense
          fallback={<Spin spinning tip="Loading..." className="spin-loading" />}
        >
          <Routes>
            <Route exact path={RouteEnum.Home} element={<SampleContainer />} />
          </Routes>
        </Suspense>
      </div>
    </Spin>
  );
};

MainLayout.defaultProps = {
  children: "",
};

MainLayout.propTypes = {
  children: PropTypes.any.isRequired,
};

export default MainLayout;
