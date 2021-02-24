const sql = require("../db");
const personf = function(person) {
  this.personid=person.personid;
  this.persontype=person.persontype;
  this.personname = person.personname;
  this.phonenumber = person.phonenumber;
  this.address = person.address;
  this.condition = person.condition;
  this.payment = person.payment;
  this.balance = person.balance;
  this.note=person.note;
};


personf.getAllperson = result => {
  sql.query("SELECT * FROM person", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    }
    result(null, res);
  });
};
personf.getlateperson = result => {
  sql.query("SELECT * FROM person where condtion='late'", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    }
    result(null, res);
  });
};

personf.gettypeperson=(type, result) => {
  sql.query("SELECT * FROM person where persontype=?",[type], (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    }result(null, res);
  });
};
personf.getpersonid =(customerId, result) => {
  sql.query("SELECT * FROM person WHERE personid=?",[customerId], (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    if (res.length) {
      result(null, res[0]);
      return;}
    result({ kind: "not_found" }, null);
  });
};
personf.updateperson = (cust, result) => {
  sql.query(
    "UPDATE person SET personname = ?, phonenumber = ?, address = ?, condtion=?,payment=?, balance=?,note=? WHERE personid = ?",
[cust.personname, cust.phonenumber, cust.address,cust.condtion
,cust.payment,cust.balance,cust.note, cust.personid],
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

personf.insert = (newCustomer, result) => {
  sql.query("INSERT INTO person SET ?", newCustomer, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    result(null, {});
  });
};
personf.deleteperson = (id, result) => {
  sql.query("DELETE FROM person WHERE personid = ?", id, (err, res) => {
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
personf.updatepayment= (person, result) => {
  sql.query("UPDATE person SET payment=?, balance=?,condtion=? WHERE personid = ?",
    [person.payment,person.balance,person.condtion,person.personid],
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
personf.getlastperson  = result => {
  sql.query("SELECT * FROM person ORDER BY personid DESC LIMIT 1", (err, res) => {
    if (err) {
      console.log("error: ", err);  result(err, null);  return; }  if (res.length) {  result(null, res[0]); return;
    }
    result({ kind: "not_found" }, null);  });
};

personf.updatcondtion= (id,result) => {
  sql.query("UPDATE person SET condtion='late' WHERE personid = ? AND condtion !='late' ",
    [id],
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
module.exports= personf;
