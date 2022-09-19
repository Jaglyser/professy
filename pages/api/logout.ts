import { withIronSessionApiRoute } from 'iron-session/next'
import { sessionOptions } from '../../lib/session'
import { NextApiRequest, NextApiResponse } from 'next'

function logoutRoute(req: NextApiRequest, res: NextApiResponse) {
    req.session.destroy()
    res.json({
        token: '',
        id: ''
    })
}

export default withIronSessionApiRoute(logoutRoute, sessionOptions)