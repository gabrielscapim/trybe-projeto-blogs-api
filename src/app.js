const express = require('express');
const { loginRoutes, userRoutes, categoryRoutes, blogPostRoutes } = require('./routes');
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
app.use('/user', userRoutes);
app.use('/categories', categoryRoutes);
app.use('/post', blogPostRoutes);
app.use(errorHandler);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
