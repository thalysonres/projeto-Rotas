const controllerMuscular = require('../controllers/muscularControllers.js');

app.get('/muscular/muscularMenu', controllerMuscular.menuMuscularControllers);

app.get('/muscular/muscularSuperioresMenu', controllerMuscular.menuMuscularSuperioresControllers);

app.get('/muscular/muscularSuperioresCutaneosMenu', controllerMuscular.menuMuscularSuperioresCutaneosControllers);
