const Type = require("Type")

class Query {



    TYPES = {
        SELECT: new Type("SELECT"),
        INSERT: new Type("INSERT"),
        DELETE: new Type("DELETE"),
    }
}

module.exports = Query