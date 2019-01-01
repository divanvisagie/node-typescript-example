interface IPingRepository {
    getResponseMessage(message: string): string
}

export default IPingRepository