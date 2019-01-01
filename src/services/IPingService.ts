interface IPongMessage {
    message: string
}

interface IPingService {
    /**
     * Get Ping message object response
     * @param message Message sent in by user
     */
    getPongForPing(message: string): IPongMessage
}

export default IPingService
export {
    IPingService,
    IPongMessage
}