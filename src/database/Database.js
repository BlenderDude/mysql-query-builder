import mysql from 'mysql'

import Config from './Config'

export default class Database {

    static cluster

    /**
     * Connect a pool based on a config
     * @param {Config} config
     */
    static connect(config) {

        //Create a cluster with the custom config
        const cluster = mysql.createPoolCluster({
            restoreNodeTimeout: 1000,
            defaultSelector: "ORDER",
        })
    }

    static writeQuery(query){
        //TODO implement write query
    }

    static readQuery(query){
        //TODO implement read query
    }



    static Config = Config
}