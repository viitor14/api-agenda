import { Router } from 'express';
import userController from '../controllers/UserController';

import loginRequired from '../middlewares/loginRequired';

const router = new Router();

// Não deveria existir num sistema
// router.get('/', userController.index); // Lista todos usuarios
// router.get('/:id', userController.show); // Lista um usuario

router.post('/', userController.store);
router.get('/', loginRequired, userController.show); // Lista um usuario
router.put('/', loginRequired, userController.update);
router.delete('/', loginRequired, userController.delete);

export default router;
/*
index -> lista todos usuarios -> GET
store/create -> cria um novo usuario -> POST
delete -> apaga um usuario -> DELETE
show -> mostra um usuario -> GET
update -> atualiza um usuario -> PATCH ou PUT
*/
