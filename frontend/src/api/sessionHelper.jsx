import jwt_decode from "jwt-decode";
import { Navigate } from "react-router-dom";

// braw_l9sj3n = user token
// braw_k8sgt5 = expire session login timestamp

const invalidateSession = () => localStorage.clear();

const setUserData = (token) => {
  const exp = jwt_decode(token).exp;

  localStorage.setItem("braw_l9sj3n", token);
  localStorage.setItem("braw_k8sgt5", exp);
};

const getToken = localStorage.getItem("braw_l9sj3n");

const CheckUser = ({ forLoggedOut = false, red = false, children = null }) => {
  let hasToken =
    localStorage.getItem("braw_l9sj3n") &&
    Date.now() < localStorage.getItem("braw_k8sgt5") * 1000;

  // Only show for logged in user
  if (!forLoggedOut && !hasToken) {
    if (red) {
      invalidateSession();
      return <Navigate to="/login" />;
    }
    return null;
  }
  // Only show for logged out user (w/ forLoggedOut=true)
  else if (forLoggedOut && hasToken) {
    if (red) return <Navigate to="/" />;
    return null;
  }
  if (children) return children;
  return null;
};

const getActiveUser = () => {
  let hasToken =
    localStorage.getItem("braw_l9sj3n") &&
    Date.now() < localStorage.getItem("braw_k8sgt5") * 1000;

  return hasToken;
};

export { setUserData, getToken, CheckUser, invalidateSession, getActiveUser };
