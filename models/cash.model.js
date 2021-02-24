
const sql = require("../db");
// constructor
const cashf = function(cash) {
  this.balance=cash.balance
  this.date=cash.date
  this.userid=cash.userid
  this.details=cash.details
};


cashf.getallcash = result => {
  sql.query("SELECT   c.*,u.username FROM cash c JOIN user u ON c.userid=u.userid", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);

    }

  
    result(null, res);
  });
};


cashf.getlast  = result => {
  sql.query("SELECT * FROM cash ORDER BY cashid DESC LIMIT 1 ", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {

      result(null, res[0]);
      return;
    }

    result({ kind: "not_found" }, null);
  });
};
cashf.insert = (newdeal, result) => {
  sql.query("INSERT INTO cash SET ?", newdeal, (err, res) => {
    if (err) {

      result(err, null);
      return;
    }


    result(null, {});
  });
};
module.exports= cashf;
