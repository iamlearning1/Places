import { uiStartLoading, uiStopLoading } from "./index";
import { AUTH_SET_TOKEN } from "./actionTypes";

export const tryAuth = (authData, authMode) => dispatch => {
  dispatch(uiStartLoading());
  let url =
    "https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyBRtZ_GD5RdOURdMhmbyEXYxYwRvs3MTBA";
  if (authMode === "login") {
    url =
      "https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyBRtZ_GD5RdOURdMhmbyEXYxYwRvs3MTBA";
  }
  fetch(url, {
    method: "POST",
    body: JSON.stringify({
      email: authData.email,
      password: authData.password,
      returnSecureToken: true
    }),
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(res => res.json())
    .then(res => {
      dispatch(uiStopLoading());
      if (!res.idToken) {
        alert("Something Went Wrong");
      } else {
        dispatch(authSetToken(res.idToken));
      }
    })
    .catch(err => {
      dispatch(uiStopLoading());
    });
};

const authSetToken = token => ({
  type: AUTH_SET_TOKEN,
  token
});

export const authGetToken = () => (dispatch, getState) => {
  const promise = new Promise((resolve, reject) => {
    const token = getState().auth.token;
    if (!token) {
      reject();
    } else {
      resolve(token);
    }
  });
  return promise;
};
