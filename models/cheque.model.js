


const sql = require("../db");
// constructor
const chequef = function(cheque) {
  this.userid=cheque.userid
  this.personid=cheque.personid
  this.dealid=cheque.dealid
  this.balance=cheque.balance
  this.date=cheque.date
  this.acceptance=cheque.acceptance
  this.details=cheque.details
  this.bankname=cheque.bankname
  this.bankcost=cheque.bankcost
  this.cond=cheque.cond
  this.place=cheque.place
  this.bankdate=cheque.bankdate
  this.answerdate=cheque.answerdate
  this.borrowname=cheque.borrowname
  this.balcon=cheque.balcon
};


chequef.getallcheque = result => {
  sql.query("SELECT cq.*,u.username,p.personname,p.persontype FROM cheque cq JOIN user u ON cq.userid=u.userid JOIN person p ON cq.personid=p.personid", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);

    }
    result(null, res);
  });
};



chequef.getchequesnull= result => {
  sql.query("SELECT cq.*,u.username,p.personname,p.persontype FROM cheque cq JOIN user u ON cq.userid=u.userid JOIN person p ON cq.personid=p.personid where acceptance IS NULL AND answerdate IS NULL", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);

    }
    result(null, res);
  });
};
chequef.getchequesnullnumber= result => {
  sql.query("SELECT * FROM cheque where acceptance IS NULL AND cond IS NOT NULL", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);

    }
    result(null, res);
  });
};
chequef.gettimerfunction= result => {
  sql.query("SELECT * FROM cheque where acceptance IS NULL AND cond IS NULL ", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);

    }
    result(null, res);
  });
};

chequef.getborrowcheque= result => {
  sql.query("SELECT cq.*,u.username FROM cheque cq JOIN user u ON cq.userid=u.userid  where personid IS NULL ", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);

    }
    result(null, res);
  });
};
chequef.getborrowchequeunaccepted= result => {
  sql.query("SELECT cq.*,u.username FROM cheque cq JOIN user u ON cq.userid=u.userid where personid IS NULL AND acceptance IS NULL AND cond IS NOT NULL ", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);

    }
    result(null, res);
  });
};
chequef.getborchequeid  = (id, result)  => {
  sql.query("SELECT cq.*,u.username FROM cheque cq JOIN user u ON cq.userid=u.userid WHERE chequeid =?",[id], (err, res) => {
    if (err) {
      console.log("error: ", err); result(err, null);  return;
    }   if (res.length) {  result(null, res[0]); return;  }
    result({ kind: "not_found" }, null);
  });
};
chequef.getcondchequesnotnull= result => {
  sql.query("SELECT cq.*,u.username,p.personname,p.persontype FROM cheque cq JOIN user u ON cq.userid=u.userid JOIN person p ON cq.personid=p.personid where cond IS NOT NULL AND acceptance IS NULL", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);

    }
    result(null, res);
  });
};
chequef.getcheque  = (id, result)  => {
  sql.query("SELECT cq.*,u.username,p.personname,p.persontype FROM cheque cq JOIN user u ON cq.userid=u.userid JOIN person p ON cq.personid=p.personid WHERE chequeid =?",[id], (err, res) => {
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

chequef.getlastcheque  = result  => {
  sql.query("SELECT * FROM cheque  ORDER BY chequeid DESC LIMIT 1", (err, res) => {
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

chequef.insert = (newdeal, result) => {
  sql.query("INSERT INTO cheque SET ?", newdeal, (err, res) => {
    if (err) {
      console.log(err)
      result(err, null);
      return;
    }


    result(null, {});
  });
};


chequef.updatacceptance = (data, result) => {
  sql.query("UPDATE cheque SET acceptance=? ,answerdate=? ,place=?,cond=?, bankcost=?,bankdate=? WHERE chequeid = ?",
    [data.acceptance,data.answerdate,data.place,data.cond,data.bankcost,data.bankdate,data.chequeid],
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

chequef.updatetimercond = (data, result) => {
  sql.query(


    "UPDATE cheque SET cond=? WHERE chequeid = ?",
    [data.cond,data.chequeid],
    (err, res) => {
      if (err) {   console.log("error: ", err);    result(null, err);    return;    }
      if (res.affectedRows == 0) {   result({ kind: "not_found" }, null);   return;   }
      result(null, {});
    }
  );
};

chequef.delete = (id, result) => {
  sql.query("DELETE FROM cheque WHERE chequeid = ?",[ id], (err, res) => {
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
chequef.deleteperson = (id, result) => {
  sql.query("DELETE FROM cheque WHERE personid = ?",[ id], (err, res) => {
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
chequef.deletedeal = (id, result) => {
  sql.query("DELETE FROM cheque WHERE dealid = ?",[ id], (err, res) => {
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
module.exports= chequef;
