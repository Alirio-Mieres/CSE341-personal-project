import swaggerAutogen from 'swagger-autogen';

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

swaggerAutogen(outputFile, endpointsFiles, doc);

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
