
const sql = require("../db");
const activityf = function(activity) {
    this.type = activity.type;
    this.details = activity.details;
    this.cost = activity.cost;
    this.Date= activity.Date;
    this.personid=activity.personid
   this.dealid=activity.dealid;
   this.userid=activity.userid;
   this.itemid=activity.itemid;
   this.orderid=activity.orderid;
   this.cashid=activity.cashid;
   this.bankid=activity.bankid;
   this.chequeid=activity.chequeid;
   this.bname=activity.bname;
  };

  activityf.getAllacitivy = result => {
    sql.query("SELECT a.*,u.username FROM activity a JOIN user u ON a.userid=u.userid where a.type IS NOT NULL ORDER BY activityid DESC ", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
  
      }
      result(null, res);
    });
  };
  activityf.getAllacitivylimit = result => {

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();
    var first="%"+  yyyy+ "-" +mm+"%"

      

    sql.query("SELECT a.*,u.username FROM activity a JOIN user u ON a.userid=u.userid where a.type IS NOT NULL AND Date LIKE ?  ORDER BY activityid DESC ",first, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
  
      }
      result(null, res);
    });
  };

  activityf.getpersonacitivy = (id, result) => {
    sql.query("SELECT a.*,u.username FROM activity a JOIN user u ON a.userid=u.userid  WHERE personid=? AND a.type IS NOT NULL ORDER BY activityid DESC ",id, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err); 
  
      }
      result(null, res);
    });
  };
  activityf.getpersonacitivylimit = (id, result) => {
    sql.query("SELECT a.*,u.username FROM activity a JOIN user u ON a.userid=u.userid  WHERE personid=? AND a.type IS NOT NULL  ORDER BY activityid DESC limit 10 ",id, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
  
      }
      result(null, res);
    });
  };
    activityf.getborrowacitivy =  result => {
    sql.query("SELECT a.*,u.username FROM activity a JOIN user u ON a.userid=u.userid  WHERE a.type='borrow payment' OR a.type='borrow money' OR a.type='bank payment' OR a.type='safe payment' OR a.type='transfer money' ", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
  
      }
      result(null, res);
    });
  };
    activityf.getborrowacitivydis = (id, result) => {
    sql.query("SELECT DISTINCT bname FROM activity  WHERE (type <> 'borrow payment' OR type <> 'borrow money') ",id, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
  
      }
      result(null, res);
    });
  };

  activityf.getitemacitivy = (id, result) => {
    sql.query("SELECT a.*,u.username FROM activity a JOIN user u ON a.userid=u.userid WHERE itemid=? ORDER BY activityid DESC",[id], (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
  
      }
      result(null, res);
    });
  };
  activityf.getitemacitivylimit = (id, result) => {
    sql.query("SELECT a.*,u.username FROM activity a JOIN user u ON a.userid=u.userid WHERE itemid=? ORDER BY activityid DESC limit 20",[id], (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
  
      }
      result(null, res);
    });
  };

  activityf.getdealacitivy = (id, result) => {
    sql.query("SELECT a.*,u.username FROM activity a JOIN user u ON a.userid=u.userid WHERE dealid=?",id, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
  
      }
      result(null, res);
    });
  };
 activityf.deleteitemactivity = (id, result) => {
    sql.query("DELETE FROM activity WHERE itemid = ?", id, (err, res) => {
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
  activityf.deletepersonactivity = (id, result) => {
    sql.query("DELETE FROM activity WHERE personid = ?", id, (err, res) => {
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
  
    activityf.deleteorderactivity = (id, result) => {
    sql.query("DELETE FROM activity WHERE orderid = ?", id, (err, res) => {
      if (err) {
        console.log("error: ", err);  result(null, err);   return;
      }
  
      if (res.affectedRows == 0) {  result({ kind: "not_found" }, null);
        return;  }
   result(null, res); });
  };


  activityf.deletedealactivity = (id, result) => {
    sql.query("DELETE FROM activity WHERE dealid = ?", id, (err, res) => {
      if (err) {
        console.log("error: ", err);   result(null, err);    return;  }
      if (res.affectedRows == 0) {   result({ kind: "not_found" }, null); return;}   result(null, res);
    });
  };
    activityf.deletedealactivityupdeal = (id, result) => {
    sql.query("DELETE FROM activity WHERE  type='update customer deal items/balance' AND dealid = ?  ", id, (err, res) => {
      if (err) {
        console.log("error: ", err);   result(null, err);    return;  }
      if (res.affectedRows == 0) {   result({ kind: "not_found" }, null); return;}   result(null, res);
    });
  };
    activityf.deletechequeactivity = (id, result) => {
    sql.query("DELETE FROM activity WHERE chequeid = ?", id, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }if (res.affectedRows == 0) { result({ kind: "not_found" }, null);  return; }  result(null, res);
    });
  };
  activityf.deleteactivity = (id, result) => {
    sql.query("DELETE FROM activity WHERE activityid = ?", id, (err, res) => {
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
  
 activityf.insert = (newactivity, result) => {
    sql.query("INSERT INTO activity SET ?", newactivity, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      result(null, {});
    });
  };
  module.exports= activityf;