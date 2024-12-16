import {
  loginFailure,
  loginStart,
  loginSuccess,
  registerStart,
  registerSuccess,
  registerFailure,
  updateUserStart,
  updateUserSuccess,
  updateUserFailure,
} from "./userSlice";
import { addProjectSuccess, getProjectSuccess } from "./projectSlice";
import request from "../api";

import axios from "axios";

export const login = (user) => async (dispatch) => {
  dispatch(loginStart());
  try {
    const res = await request("POST", "/auth/login", user);
    console.log("Response from API : ",res);
    // const data = {...res}
    // console.log(data);
    dispatch(loginSuccess(res));  
    localStorage.setItem("user", JSON.stringify(res));
  } catch (err) {
    dispatch(loginFailure());
    console.error("Login failed:", err);
  }
};

export const register = (user) => async (dispatch) => {
  dispatch(loginStart());
  try {
    const res = await request("POST", "/auth/register", user);  
    dispatch(registerSuccess(res)); 
  } catch (err) {
    dispatch(loginFailure()); 
  }
};

export const logout = async (dispatch, user) => {
  try {
    const res = await axios.post("/auth/logout", user);
    dispatch(logout(res.data));
  } catch {}
};

export const addProject = async (project, dispatch) => {
  try {
    const res = await axios.post(`/project`, project);
    dispatch(addProjectSuccess(res.data));
  } catch {}
};

export const getProject = async (dispatch) => {
  try {
    const res = await axios.get("http://localhost:5000/api/project");
    dispatch(getProjectSuccess(res.data));
  } catch {}
};
