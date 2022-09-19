import { NextApiRequest, NextApiResponse } from "next"
import { withIronSessionApiRoute } from 'iron-session/next'
import { sessionOptions } from "../../lib/session"


declare module 'next' {
    interface NextApiRequest {
        session: any
    }
}

async function loginRoute(req: NextApiRequest, res: NextApiResponse) {
    try {
        const { token, id } = await req.body
        const user = { token, id }
        req.session.user = user
        await req.session.save()
        res.json(user)
    } catch (err) {
        res.status(500).json({ message: err })
    }
}
export default withIronSessionApiRoute(loginRoute, sessionOptions)
