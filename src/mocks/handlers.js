import { rest } from 'msw'

export const handlers = [
  rest.post('/login', (req, res, ctx) => {
    const { username } = req.body

    return res(
      ctx.json({
        id: 'f79e82e8-c34a-4dc7-a49e-9fadc0979fda',
        username,
        firstName: 'John',
        lastName: 'Maverick',
      })
    )
  }),

  rest.get('/users', (req, res, ctx) => {
    return res(
      ctx.json([{
        id: 'f79e82e8-c34a-4dc7-a49e-9fadc0979fda',
        firstName: 'John',
        lastName: 'Maverick',
      }, {
        id: 'eb305396-4825-486c-b9ad-cc9a3c895b28',
        firstName: 'Ola',
        lastName: 'Kowalska'
      }, {
        id: 'f6614a73-4312-43eb-b295-1af948e6b149',
        firstName: 'Jaś',
        lastName: 'Fasola'
      }]),
      ctx.status(200)
    )
  }),
]