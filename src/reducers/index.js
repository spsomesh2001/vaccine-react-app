import { combineReducers } from 'redux';

import auth from "./auth";
import admin from "./admin";
import profile from "./profile"

export const reducers = combineReducers({ auth, admin, profile });