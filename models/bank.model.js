


const sql = require("../db");

const bankf = function(bank) {
  this.balance=bank.balance
  this.date=bank.date
  this.userid=bank.userid
  this.details=bank.details
};


bankf.getallbank = result => {
  sql.query("SELECT b.*,u.username FROM bank b JOIN user u ON b.userid=u.userid", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);

    }


    result(null, res);
  });
};


bankf.getlastbank  = result => {
  sql.query("SELECT b.*,u.username FROM bank b JOIN user u ON b.userid=u.userid ORDER BY bankid DESC LIMIT 1 ", (err, res) => {
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
bankf.insert = (newdeal, result) => {
  sql.query("INSERT INTO bank SET ?", newdeal, (err, res) => {
    if (err) {

      result(err, null);
      return;
    }


    result(null, {});
  });
};
module.exports= bankf;
