import {expect} from 'chai'

import PingService from '../src/services/PingService'
import IPingService from '../src/services/IPingService'

describe('When using PingService', () => {

    let pingService: IPingService
    before(() => {
        const mockRepository =  {
            getResponseMessage(message: string): string {
                return `message ${message}`
            }
        }
        pingService = PingService(mockRepository)
    })
    describe('getPongForPing with cheese', () => {
        it('returns message cheese', () => {
            const response = pingService.getPongForPing('cheese')
            expect(response.message).to.be.eq('message cheese')
        })
    })
})