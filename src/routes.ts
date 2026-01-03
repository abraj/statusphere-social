import path from 'node:path'
import express from 'express'

import type { AppContext } from '#/types'
import { home } from '#/pages/home'
import { login } from '#/pages/login'
import { page } from '#/lib/view'

// Helper function for defining routes
const handler =
  (fn: express.Handler) =>
  async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    try {
      await fn(req, res, next)
    } catch (err) {
      next(err)
    }
  }

export const createRouter = (ctx: AppContext) => {
  const router = express.Router()

  // Static assets
  router.use('/public', express.static(path.join(__dirname, 'pages', 'public')))

  // Login page
  router.get(
    '/login',
    handler(async (_req, res) => {
      return res.type('html').send(page(login({})))
    })
  )

  // Login handler
  router.post(
    '/login',
    handler(async (req, res) => {
      const handle = req.body?.handle
      res.send(`handle: ${handle}`)
    })
  )

  // Home page
  router.get(
    '/',
    handler(async (_req, res) => {
      return res.type('html').send(page(home()))
    })
  )

  return  router
}
