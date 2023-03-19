"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const swagger_autogen_1 = __importDefault(require("swagger-autogen"));
const doc = {
    info: {
        title: 'Personal API',
        description: 'Personal API - Alirio Mieres - BYU Idaho - CSE 341'
    },
    host: 'localhost:8080',
    schemes: ['http'],
    securityDefinitions: {
        apiKey: {
            type: 'apiKey',
            name: 'apiKey',
            in: 'header'
        }
    },
    security: [{ apiKey: [] }]
};
const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index'];
(0, swagger_autogen_1.default)(outputFile, endpointsFiles, doc);
// const doc = {
//   info: {
//     title: 'Personal API',
//     description: 'Personal API - Alirio Mieres - BYU Idaho - CSE 341'
//   },
//   host: 'localhost:8080',
//   schemes: ['http'],
//   security: {
//     bearerAuth: {
//       type: 'apiKey',
//       in: 'header',
//       name: 'apiKey',
//       description: 'Bearer authentication token. Example: Bearer eyJhbGciOiJIUzI1NiJ9...'
//     }
//   },
//   securityDefinitions: {
//     bearerAuth: {
//       type: 'apiKey',
//       in: 'header',
//       name: 'apiKey',
//       description: 'Bearer authentication token. Example: Bearer eyJhbGciOiJIUzI1NiJ9...'
//     }
//   }
// };
//# sourceMappingURL=swagger.js.map