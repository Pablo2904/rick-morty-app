import React from "react";
import { useNavigate } from "react-router-dom";

//HOC
function withNavigate(Component: React.ComponentType<any>) {
  return function WrappedComponent(props: any) {
    const navigate = useNavigate(); //Hook useNavigate;

    return <Component {...props} navigate={navigate} />;
  };
}

export default withNavigate;
