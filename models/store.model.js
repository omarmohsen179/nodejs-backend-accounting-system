const sql = require("../db");
const storeff = function(store) {
    this.itemid=store.itemid
    this.storeid=store.storeid
    this.storequantity=store.storeid
    this.itemname=store.itemname
    this.itemtype=store.itemtype
};
storeff.getstoreitems  = result => {
    sql.query("SELECT x.itemstoreid, x.itemid  "+
    " FROM ( SELECT * from   itemstore  ORDER BY itemstoreid DESC) as x"+
   " "
        , (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        result(null, res);
    });
};
//mysql://b8996f66576b9e:4c9bf85e@eu-cdbr-west-03.cleardb.net/heroku_8cb94d7b6cec766?reconnect=true

module.exports= storeff;



