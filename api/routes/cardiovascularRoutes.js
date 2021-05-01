const controllerCardiovascular = require('../controllers/cardiovascularControllers.js');

app.get('/cardiovascular/cardiovascularMenu', controllerCardiovascular.menuCardiovascularControllers);
