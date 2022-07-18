import { Router } from 'express'
import * as postsCtrl from '../controllers/posts.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'
const router = Router()

/*---------- Public Routes ----------*/
router.get('/', postsCtrl.index)
/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.post('/', checkAuth, postsCtrl.create)
<<<<<<< HEAD
router.post('/:id/comments', checkAuth, postsCtrl.createComment)

=======
router.put('/:id', checkAuth, postsCtrl.update)
>>>>>>> main

export {
  router
}