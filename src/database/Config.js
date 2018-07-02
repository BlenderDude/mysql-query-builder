import Connection from "./Connection"

export default class Config {

    /**
     * Create a configuration for database class
     * @param options Options to create a config to the database
     * @param {Connection} options.writeConnection Write server
     * @param {Connection[]} options.readConnections Read servers, can be the same as write if no slaves
     * @param {number} [options.connectionLimit = 10] Number of concurrent connections per server
     */
    constructor(options) {
        const {
            writeConnection,
            readConnections,
            connectionLimit = 10,
        } = options

        this.writeConnection = writeConnection
        this.readConnections = readConnections
        this.connectionLimit = connectionLimit
    }

    static Connection = Connection
}