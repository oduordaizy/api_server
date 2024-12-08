//Creating the express server

const express = require('express');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs')
const swaggerDocument = YAML.load('./swagger.yaml');

const app = express();
const port = 3000;

//Middleware to parse JSON bodies
app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

//api-docs is an endpoint where you can view your APIs documentation. 

app.get('/', (req, res)=>{
    res.send("Hello World!")
})

app.listen(port, ()=>{
    console.log(`App is listening at http://localhost:${port}`);
});
