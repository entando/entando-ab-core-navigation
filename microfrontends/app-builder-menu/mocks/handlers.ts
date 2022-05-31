import { rest } from 'msw'

export const handlers = [
  // Handles a GET request
  rest.get('/your-endpoint', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        message: "hello world"
      })
    )
  }),
]
