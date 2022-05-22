import { Router } from "express";
import * as PrincipalController from '../controllers/principalController';

const router = Router();

router.get('/',PrincipalController.home);

router.post('/enviar-ceps',PrincipalController.consultaCep);

export default router;