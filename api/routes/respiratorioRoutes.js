const controllerRespiratorio = require('../controllers/respiratorioControllers.js');

app.get('/respiratorio/respiratorioMenu', controllerRespiratorio.menuRespiratorioControllers);
