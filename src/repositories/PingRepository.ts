import IPingRepository from './IPingRepository'

const PingRepository = () => {
    return {
        getResponseMessage(message: string): string {
            return `My response to your ping of ${message} is PONG!`
        }
    }
}

export default PingRepository