import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { routeConstant } from "../../Utils/routeConstant";
import Loader from "../Common/Loader/Loader";

const Appcontent = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Router>
        <Routes>
          {routeConstant.map((route, i) => {
            return (
              <Route
                key={i}
                path={route.path}
                name={route.name}
                element={route.element}
              />
            );
          })}
          <Route path="/*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </Suspense>
  );
};

export default Appcontent;
