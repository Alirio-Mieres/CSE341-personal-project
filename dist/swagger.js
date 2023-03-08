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
    // host: 'cse341-lesson-05.onrender.com',
    host: 'localhost:8080',
    schemes: ['http']
};
const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index'];
(0, swagger_autogen_1.default)(outputFile, endpointsFiles, doc);
//# sourceMappingURL=swagger.js.map