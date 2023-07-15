const express = require('express');
const { loginRoutes } = require('./routes');
const errorHandler = require('./middlewares/errorHandler');
const { validateLoginFields } = require('./middlewares/validateLoginFields');

// ...

const app = express();

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());
app.use('/login', validateLoginFields, loginRoutes);
app.use(errorHandler);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
