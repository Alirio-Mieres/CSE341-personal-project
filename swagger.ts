import swaggerAutogen from 'swagger-autogen';
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

swaggerAutogen(outputFile, endpointsFiles, doc)