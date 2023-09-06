import React from "react";

const LoadingCircle = ({ isLoading }) => {
  return isLoading ? <div className="loading-circle"></div> : null;
};

export default LoadingCircle;
