const controllerArticular = require('../controllers/articularControllers.js');

app.get('/articular/articularMenu', controllerArticular.menuArticularControllers);
