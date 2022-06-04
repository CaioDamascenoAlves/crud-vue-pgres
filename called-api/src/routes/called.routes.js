/**
 * arquivo: routes/called-routes.js
 * descrição: arquivo responsável pelas rotas da API
 * data: 04/06/2022
 */

const router = require('express-promise-router')();
const calledController = require('../controllers/called.controller');

// ==> Definindo as rotas do CRUD - 'called'

// ==> Rota responsável por criar um novo 'Chamado': (POST): localhost:3000/api/calleds
router.post('/calleds', calledController.createCalled);

// ==> Rota responsável por listar todos os 'Chamados': (GET): localhost:3000/api/calleds
router.get('/calleds', calledController.listAllCalleds);

// ==> Rota responsável por listar um determinado 'Chamado' por Id: (GET): localhost:3000/api/calleds/:id
router.get('/calleds/:id', calledController.findCalledById)

// ==> Rota reponsável por atualizar um determinado 'Chamado por Id: (PUT): localhost:3000/api/calleds/:id
router.put('/calleds/:id', calledController.updateCalledById)

// ==> Rota responsável por deletar/excluir um determinado 'Chamado por Id: localhost:3000/api/calleds/:id
router.delete('/calleds/:id', calledController.deleteCalledById);

module.exports = router;