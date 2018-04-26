const database = require("./database-connection");

module.exports = {
    list(){
        return database("games");
    },
    read(id){
        return database("games").where("id", id);
    },
    create(game){
        return database("games").insert(game);
    },
    update(id, game){
        return database("games").where("id", id).update(game)
    },
    delete(id){
        return database("games").where("id", id).del()
    }
};
