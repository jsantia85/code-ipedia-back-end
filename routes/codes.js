import { Router } from 'express'
import * as codesCtrl from '../controllers/codes.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'
const router = Router()

/*---------- Public Routes ----------*/
router.get('/', codesCtrl.index)
/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.post('/', checkAuth, codesCtrl.create)
router.put('/:id', checkAuth, codesCtrl.update)

export {
  router
}