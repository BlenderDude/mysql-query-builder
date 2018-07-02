export default class Connection {

    /**
     *
     * @param options Options for the connection to the database
     * @param {number} [options.port = 3306] Port for the database
     * @param {string} options.host Host url
     * @param {string} options.username Username that connects to the host
     * @param {string} options.password Password to connect to the database
     */
    constructor(options) {
        const {
            port,
            host,
            username,
            password,
            database,
        } = options

        this.port = port
        this.host = host
        this.username = username
        this.password = password
        this.database = database
    }
}