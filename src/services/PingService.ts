import {IPingService, IPongMessage}  from './IPingService' 
import IPingRepository from '../repositories/IPingRepository'
import PingRepository from '../repositories/PingRepository';

const PingService = (pingRepository:IPingRepository): IPingService => {
    
    return {
        getPongForPing(message: string): IPongMessage {
            return {
                message: pingRepository.getResponseMessage(message)
            }
        }
    }
}

export default PingService