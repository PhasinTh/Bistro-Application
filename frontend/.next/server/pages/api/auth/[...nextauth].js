"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers/credentials":
/*!**************************************************!*\
  !*** external "next-auth/providers/credentials" ***!
  \**************************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/credentials");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = import("axios");;

/***/ }),

/***/ "(api)/./pages/api/auth/[...nextauth].ts":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].ts ***!
  \*****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _src_axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/src/axios */ \"(api)/./src/axios.ts\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/providers/credentials */ \"next-auth/providers/credentials\");\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_2__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_src_axios__WEBPACK_IMPORTED_MODULE_0__]);\n_src_axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n// For more information on each option (and a full list of options) go to\n// https://next-auth.js.org/configuration/options\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_1___default()({\n    // https://next-auth.js.org/configuration/providers\n    providers: [\n        next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_2___default()({\n            name: \"Credentials\",\n            credentials: {\n                email: {\n                    label: \"Email\",\n                    type: \"text\",\n                    placeholder: \"email\"\n                },\n                password: {\n                    label: \"Password\",\n                    type: \"password\"\n                }\n            },\n            async authorize (credentials) {\n                const response = await _src_axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post(\"/auth-service/login\", credentials);\n                const { data  } = response;\n                if (data) {\n                    // const response = await axios.get(\n                    //     `/bistro-service/owner/${data.user.id}`\n                    // )\n                    data.user[\"accessToken\"] = data.accessToken;\n                    // data.user['bistro'] = response.data\n                    return data.user;\n                }\n                return null;\n            }\n        })\n    ],\n    session: {\n        strategy: \"jwt\"\n    },\n    jwt: {\n        secret: process.env.JWT_SECRET_KEY || \"secret\"\n    },\n    callbacks: {\n        jwt: async ({ token , user , account  })=>{\n            if (account && user) {\n                token.email = user?.email;\n                token.name = user?.name;\n                token.sub = user?.id;\n                token.accessToken = user?.accessToken;\n                token.role = user?.role;\n            }\n            return token;\n        },\n        session: async ({ session , user , token  })=>{\n            // console.log('session', session, user, token)\n            session.user = token // Setting token in session\n            ;\n            // session.user.accessToken = token.accessToken\n            // console.log('session', session)\n            return session;\n        }\n    },\n    debug: true,\n    theme: {\n        colorScheme: \"light\"\n    },\n    pages: {\n        signIn: \"/auth/signin\"\n    }\n}));\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUErQjtBQUNDO0FBQ2lDO0FBRWpFLHlFQUF5RTtBQUN6RSxpREFBaUQ7QUFDakQsaUVBQWVDLGdEQUFRQSxDQUFDO0lBQ3BCLG1EQUFtRDtJQUNuREUsV0FBVztRQUNQRCxzRUFBbUJBLENBQUM7WUFDaEJFLE1BQU07WUFDTkMsYUFBYTtnQkFDVEMsT0FBTztvQkFDSEMsT0FBTztvQkFDUEMsTUFBTTtvQkFDTkMsYUFBYTtnQkFDakI7Z0JBQ0FDLFVBQVU7b0JBQUVILE9BQU87b0JBQVlDLE1BQU07Z0JBQVc7WUFDcEQ7WUFDQSxNQUFNRyxXQUFVTixXQUFXLEVBQUU7Z0JBQ3pCLE1BQU1PLFdBQVcsTUFBTVosdURBQVUsQ0FDN0IsdUJBQ0FLO2dCQUVKLE1BQU0sRUFBRVMsS0FBSSxFQUFFLEdBQUdGO2dCQUNqQixJQUFJRSxNQUFNO29CQUNOLG9DQUFvQztvQkFDcEMsOENBQThDO29CQUM5QyxJQUFJO29CQUVKQSxLQUFLQyxJQUFJLENBQUMsY0FBYyxHQUFHRCxLQUFLRSxXQUFXO29CQUMzQyxzQ0FBc0M7b0JBQ3RDLE9BQU9GLEtBQUtDLElBQUk7Z0JBQ3BCLENBQUM7Z0JBQ0QsT0FBTyxJQUFJO1lBQ2Y7UUFDSjtLQUNIO0lBQ0RFLFNBQVM7UUFDTEMsVUFBVTtJQUNkO0lBQ0FDLEtBQUs7UUFDREMsUUFBUUMsUUFBUUMsR0FBRyxDQUFDQyxjQUFjLElBQUk7SUFDMUM7SUFDQUMsV0FBVztRQUNQTCxLQUFLLE9BQU8sRUFBRU0sTUFBSyxFQUFFVixLQUFJLEVBQUVXLFFBQU8sRUFBRSxHQUFLO1lBQ3JDLElBQUlBLFdBQVdYLE1BQU07Z0JBQ2pCVSxNQUFNbkIsS0FBSyxHQUFHUyxNQUFNVDtnQkFDcEJtQixNQUFNckIsSUFBSSxHQUFHVyxNQUFNWDtnQkFDbkJxQixNQUFNRSxHQUFHLEdBQUdaLE1BQU1hO2dCQUNsQkgsTUFBTVQsV0FBVyxHQUFHRCxNQUFNQztnQkFDMUJTLE1BQU1JLElBQUksR0FBR2QsTUFBTWM7WUFDdkIsQ0FBQztZQUVELE9BQU9KO1FBQ1g7UUFDQVIsU0FBUyxPQUFPLEVBQUVBLFFBQU8sRUFBRUYsS0FBSSxFQUFFVSxNQUFLLEVBQUUsR0FBSztZQUN6QywrQ0FBK0M7WUFDL0NSLFFBQVFGLElBQUksR0FBR1UsTUFBTSwyQkFBMkI7O1lBQ2hELCtDQUErQztZQUMvQyxrQ0FBa0M7WUFDbEMsT0FBT1I7UUFDWDtJQUNKO0lBQ0FhLE9BQU8sSUFBSTtJQUNYQyxPQUFPO1FBQ0hDLGFBQWE7SUFDakI7SUFDQUMsT0FBTztRQUNIQyxRQUFRO0lBQ1o7QUFDSixFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLXdpdGgtdHlwZXNjcmlwdC8uL3BhZ2VzL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0udHM/MmU4YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnQC9zcmMvYXhpb3MnXG5pbXBvcnQgTmV4dEF1dGggZnJvbSAnbmV4dC1hdXRoJ1xuaW1wb3J0IENyZWRlbnRpYWxzUHJvdmlkZXIgZnJvbSAnbmV4dC1hdXRoL3Byb3ZpZGVycy9jcmVkZW50aWFscydcblxuLy8gRm9yIG1vcmUgaW5mb3JtYXRpb24gb24gZWFjaCBvcHRpb24gKGFuZCBhIGZ1bGwgbGlzdCBvZiBvcHRpb25zKSBnbyB0b1xuLy8gaHR0cHM6Ly9uZXh0LWF1dGguanMub3JnL2NvbmZpZ3VyYXRpb24vb3B0aW9uc1xuZXhwb3J0IGRlZmF1bHQgTmV4dEF1dGgoe1xuICAgIC8vIGh0dHBzOi8vbmV4dC1hdXRoLmpzLm9yZy9jb25maWd1cmF0aW9uL3Byb3ZpZGVyc1xuICAgIHByb3ZpZGVyczogW1xuICAgICAgICBDcmVkZW50aWFsc1Byb3ZpZGVyKHtcbiAgICAgICAgICAgIG5hbWU6ICdDcmVkZW50aWFscycsXG4gICAgICAgICAgICBjcmVkZW50aWFsczoge1xuICAgICAgICAgICAgICAgIGVtYWlsOiB7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnRW1haWwnLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiAnZW1haWwnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgcGFzc3dvcmQ6IHsgbGFiZWw6ICdQYXNzd29yZCcsIHR5cGU6ICdwYXNzd29yZCcgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBhc3luYyBhdXRob3JpemUoY3JlZGVudGlhbHMpIHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoXG4gICAgICAgICAgICAgICAgICAgICcvYXV0aC1zZXJ2aWNlL2xvZ2luJyxcbiAgICAgICAgICAgICAgICAgICAgY3JlZGVudGlhbHNcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgY29uc3QgeyBkYXRhIH0gPSByZXNwb25zZVxuICAgICAgICAgICAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgYC9iaXN0cm8tc2VydmljZS9vd25lci8ke2RhdGEudXNlci5pZH1gXG4gICAgICAgICAgICAgICAgICAgIC8vIClcblxuICAgICAgICAgICAgICAgICAgICBkYXRhLnVzZXJbJ2FjY2Vzc1Rva2VuJ10gPSBkYXRhLmFjY2Vzc1Rva2VuXG4gICAgICAgICAgICAgICAgICAgIC8vIGRhdGEudXNlclsnYmlzdHJvJ10gPSByZXNwb25zZS5kYXRhXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkYXRhLnVzZXJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pLFxuICAgIF0sXG4gICAgc2Vzc2lvbjoge1xuICAgICAgICBzdHJhdGVneTogJ2p3dCcsXG4gICAgfSxcbiAgICBqd3Q6IHtcbiAgICAgICAgc2VjcmV0OiBwcm9jZXNzLmVudi5KV1RfU0VDUkVUX0tFWSB8fCAnc2VjcmV0JyxcbiAgICB9LFxuICAgIGNhbGxiYWNrczoge1xuICAgICAgICBqd3Q6IGFzeW5jICh7IHRva2VuLCB1c2VyLCBhY2NvdW50IH0pID0+IHtcbiAgICAgICAgICAgIGlmIChhY2NvdW50ICYmIHVzZXIpIHtcbiAgICAgICAgICAgICAgICB0b2tlbi5lbWFpbCA9IHVzZXI/LmVtYWlsXG4gICAgICAgICAgICAgICAgdG9rZW4ubmFtZSA9IHVzZXI/Lm5hbWVcbiAgICAgICAgICAgICAgICB0b2tlbi5zdWIgPSB1c2VyPy5pZFxuICAgICAgICAgICAgICAgIHRva2VuLmFjY2Vzc1Rva2VuID0gdXNlcj8uYWNjZXNzVG9rZW5cbiAgICAgICAgICAgICAgICB0b2tlbi5yb2xlID0gdXNlcj8ucm9sZVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gdG9rZW5cbiAgICAgICAgfSxcbiAgICAgICAgc2Vzc2lvbjogYXN5bmMgKHsgc2Vzc2lvbiwgdXNlciwgdG9rZW4gfSkgPT4ge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ3Nlc3Npb24nLCBzZXNzaW9uLCB1c2VyLCB0b2tlbilcbiAgICAgICAgICAgIHNlc3Npb24udXNlciA9IHRva2VuIC8vIFNldHRpbmcgdG9rZW4gaW4gc2Vzc2lvblxuICAgICAgICAgICAgLy8gc2Vzc2lvbi51c2VyLmFjY2Vzc1Rva2VuID0gdG9rZW4uYWNjZXNzVG9rZW5cbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdzZXNzaW9uJywgc2Vzc2lvbilcbiAgICAgICAgICAgIHJldHVybiBzZXNzaW9uXG4gICAgICAgIH0sXG4gICAgfSxcbiAgICBkZWJ1ZzogdHJ1ZSxcbiAgICB0aGVtZToge1xuICAgICAgICBjb2xvclNjaGVtZTogJ2xpZ2h0JyxcbiAgICB9LFxuICAgIHBhZ2VzOiB7XG4gICAgICAgIHNpZ25JbjogJy9hdXRoL3NpZ25pbicsXG4gICAgfSxcbn0pXG4iXSwibmFtZXMiOlsiYXhpb3MiLCJOZXh0QXV0aCIsIkNyZWRlbnRpYWxzUHJvdmlkZXIiLCJwcm92aWRlcnMiLCJuYW1lIiwiY3JlZGVudGlhbHMiLCJlbWFpbCIsImxhYmVsIiwidHlwZSIsInBsYWNlaG9sZGVyIiwicGFzc3dvcmQiLCJhdXRob3JpemUiLCJyZXNwb25zZSIsInBvc3QiLCJkYXRhIiwidXNlciIsImFjY2Vzc1Rva2VuIiwic2Vzc2lvbiIsInN0cmF0ZWd5Iiwiand0Iiwic2VjcmV0IiwicHJvY2VzcyIsImVudiIsIkpXVF9TRUNSRVRfS0VZIiwiY2FsbGJhY2tzIiwidG9rZW4iLCJhY2NvdW50Iiwic3ViIiwiaWQiLCJyb2xlIiwiZGVidWciLCJ0aGVtZSIsImNvbG9yU2NoZW1lIiwicGFnZXMiLCJzaWduSW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/[...nextauth].ts\n");

/***/ }),

/***/ "(api)/./src/axios.ts":
/*!**********************!*\
  !*** ./src/axios.ts ***!
  \**********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);\naxios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\naxios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].defaults.baseURL = \"http://localhost:8000/v1\";\naxios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].defaults.headers.post[\"Content-Type\"] = \"application/json\";\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvYXhpb3MudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBeUI7QUFDekJBLDhEQUFzQixHQUFHO0FBQ3pCQSxtRkFBMkMsR0FBRztBQUM5QyxpRUFBZUEsNkNBQUtBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtd2l0aC10eXBlc2NyaXB0Ly4vc3JjL2F4aW9zLnRzPzBjNTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuYXhpb3MuZGVmYXVsdHMuYmFzZVVSTCA9ICdodHRwOi8vbG9jYWxob3N0OjgwMDAvdjEnXG5heGlvcy5kZWZhdWx0cy5oZWFkZXJzLnBvc3RbJ0NvbnRlbnQtVHlwZSddID0gJ2FwcGxpY2F0aW9uL2pzb24nXG5leHBvcnQgZGVmYXVsdCBheGlvc1xuIl0sIm5hbWVzIjpbImF4aW9zIiwiZGVmYXVsdHMiLCJiYXNlVVJMIiwiaGVhZGVycyIsInBvc3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/axios.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/auth/[...nextauth].ts"));
module.exports = __webpack_exports__;

})();