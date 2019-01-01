import IPingService from '../services/IPingService'
import {Router} from 'express'

const Ping = (pingService: IPingService): Router => {
    const router = Router()

    router.get('/', (req,res) => {
        res.json({message: 'You send a get to ping you get a simple pong'})
    })

    router.post('/', (req, res) => {
        const message = req.body
        const response = pingService.getPongForPing(message)
        res.send(response)
    })

    return router
}

export default Ping