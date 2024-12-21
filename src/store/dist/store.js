"use strict";
// import { combineReducers, configureStore } from "@reduxjs/toolkit";
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
//   createMigrate,
//   MigrationManifest,
//   PersistedState,
// } from "redux-persist";
exports.__esModule = true;
exports.persistor = exports.store = void 0;
// import operatorsJson from "data/operators.json";
// import depotReducer from "./depotSlice";
// import goalsReducer from "./goalsSlice";
// import storage from "./storage";
// import userReducer from "./userSlice";
// import { OperatorGoalCategory } from "types/goal";
// import { OpJsonObj } from "types/operator";
// const migrations: MigrationManifest = {
//   2: (state) => {
//     return {
//       ...state,
//       goals: (state as RootState).goals
//         .map((goal) => {
//           if (goal.category === OperatorGoalCategory.Module) {
//             goal.moduleLevel ??= 1;
//             if (goal.moduleId == null) {
//               const op: OpJsonObj =
//                 operatorsJson[goal.operatorId as keyof typeof operatorsJson];
//               const firstModule = op.modules[0];
//               if (firstModule == null) {
//                 console.warn(
//                   "Couldn't find any modules for this operator module goal",
//                   goal
//                 );
//                 return null;
//               }
//               goal.moduleId = firstModule.moduleId;
//             }
//           }
//           return goal;
//         })
//         .filter((goal) => Boolean(goal)),
//     } as PersistedState;
//   },
//   3: (state) => {
//     return {
//       ...state,
//       goals: (state as RootState).goals
//           .map((goal) => {
//             goal.priority ??= "0";
//             return goal;
//           })
//     } as PersistedState;
//   },
// };
// const persistConfig = {
//   key: "root",
//   version: 3,
//   storage,
//   migrate: createMigrate(migrations, { debug: true }),
// };
// const persistedReducer = persistReducer(
//   persistConfig,
//   combineReducers({
//     depot: depotReducer,
//     goals: goalsReducer,
//     user: userReducer,
//   })
// );
// export const store = configureStore({
//   reducer: persistedReducer,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
// });
// export const persistor = persistStore(store);
// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;
var toolkit_1 = require("@reduxjs/toolkit");
var redux_persist_1 = require("redux-persist");
var storage_1 = require("./storage");
// Empty reducers
var emptyReducer = function (state) {
    if (state === void 0) { state = {}; }
    return state;
};
var persistConfig = {
    key: "root",
    version: 1,
    storage: storage_1["default"]
};
var persistedReducer = redux_persist_1.persistReducer(persistConfig, toolkit_1.combineReducers({
    // depot: emptyReducer,
    // goals: emptyReducer,
    // user: emptyReducer,
    storeTS: emptyReducer
}));
exports.store = toolkit_1.configureStore({
    reducer: persistedReducer,
    middleware: function (getDefaultMiddleware) {
        return getDefaultMiddleware({
            serializableCheck: false
        });
    }
});
exports.persistor = redux_persist_1.persistStore(exports.store);
