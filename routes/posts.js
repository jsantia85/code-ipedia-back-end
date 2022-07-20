import { Router } from 'express'
import * as postsCtrl from '../controllers/posts.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'
const router = Router()

/*---------- Public Routes ----------*/
router.get('/', postsCtrl.index)
/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.post('/', checkAuth, postsCtrl.create)
router.put('/:id', checkAuth, postsCtrl.update)
router.post('/:id', checkAuth, postsCtrl.createComment)
router.delete('/:id', checkAuth, postsCtrl.delete)


export {
  router
}