const sql = require("../db");
// constructor
const userf = function(user) {
  this.username = user.username;
  this.password = user.password;
  this.type = user.type;
};
userf.findById = (id, result) => {
  sql.query("SELECT * FROM user WHERE userid =?",[id], (err, res) => {
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

userf.getAll = result => {
  sql.query("SELECT * FROM user", (err, res) => {
    if (err) {
      result(null, err);
    }
     result(null, res);
  });
};

userf.updateById = (user, result) => {
  sql.query(
    "UPDATE user SET username = ?, password = ?, type = ? WHERE userid = ?",
    [user.username, user.password, user.type, user.userid],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {

        result({ kind: "not_found" }, null);
        return;
      }


      result(null, {});
    }
  );
};

userf.deleteuser = (id, result) => {
  sql.query("DELETE FROM user WHERE id = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found Customer with the id
      result({ kind: "not_found" }, null);
      return;
    }
    result(null, res);
  });
};
userf.insert = (newCustomer, result) => {
  sql.query("INSERT INTO user SET ?", newCustomer, (err, res) => {
    if (err) {
      result(err, null);
      return;
    }
    result(null, {});
  });
};
module.exports = userf;
