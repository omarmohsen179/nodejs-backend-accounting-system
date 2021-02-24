const sql = require("../db");
const dealf = function(deal) {
  this.dealtype=deal.dealtype;
  this.dealdate = deal.dealdate;
  this.paymentdate = deal.paymentdate;
  this.productname = deal.productname;
  this.quantity= deal.quantity;
  this.dealbalance = deal.dealbalance;
  this.dealdetails = deal.dealdetails;
  this.discount = deal.discount;
this.active= deal.active;
    this.discountper=deal.discountper;
    this.addbalance=deal.addbalance;

};
dealf.getAlldeals = result => {
    sql.query("SELECT d.*,u.username FROM deal d  JOIN user u ON d.userid=u.userid where d.personid!=0  ORDER BY d.dealid DESC", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
      }
      result(null, res);
    });
  };
  dealf.getAlldealslimit = result => {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();
    var month=Number(mm)
    var year=Number(yyyy)
    var first;
    var second;
    var third;
   month=month-1;
   if(month>0){
    if(month.toString().length>1){
      first="%"+  year.toString()+ "-" +month.toString()+"%"
    }
    else{
      first="%"+   year.toString() + "-" +"0"+month.toString()+"%"
    }
  }
  else{
    year-=1;
    month=12
    first="%"+ year.toString() + "-" +month.toString()+"%"
  }
  month=month-1;
    if(month>0){
      if(month.toString().length>1){
          second="%"+  year.toString()+ "-" +month.toString()+"%"
      }
      else{
        second="%"+   year.toString() + "-" +"0"+month.toString()+"%"
      }
    }
    else{
      year-=1;
      month=12
      second="%"+ year.toString() + "-" +month.toString()+"%"
      console.log(" LLL: "+second)
    }
  
    month=month-1;
    if(month>0){
      if(month.toString().length>1){
          third="%"+  year.toString() + "-" +month.toString()+"%"
      }
      else{
        third="%"+ year.toString() + "-" +"0"+month.toString()+"%"
      }
    }
    else{
      year-=1;
      month=12
      third="%"+ year.toString() + "-" +month.toString()+"%"
    }


    
    sql.query("SELECT d.*,u.username FROM deal d  JOIN user u ON d.userid=u.userid where d.personid!=0  AND (dealdate LIKE ? OR dealdate LIKE ? OR dealdate LIKE ?)",[first,second,third] , (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
      }
      result(null, res);
    });
  };
  dealf.getnoperson = result => {
    sql.query("SELECT d.*,u.username FROM deal d  JOIN user u ON d.userid=u.userid where d.personid=0", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
      }
      result(null, res);
    });
  };
  dealf.getlateman = result => {
    sql.query("SELECT d.*,u.username FROM deal d  JOIN user u ON d.userid=u.userid where active='deadline'", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
      }
      result(null, res);
    });
  };
dealf.getlastdeal = result => {
    sql.query("SELECT * FROM deal ORDER BY dealid DESC LIMIT 1 ", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
      }
      result(null, res);
    });
  };
  dealf.getdealday = (id, result)  => {
    var ac="active"
    sql.query("SELECT d.*,p.persontype,p.condtion FROM deal d JOIN person p ON p.personid=d.personid where paymentdate=? AND d.active=? AND p.persontype='customer'",[id,ac], (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
  
      }
  
  
      result(null, res);
    });
  };
  
    dealf.getdealdaytimer = (id, result)  => {
    var ac="active"
    sql.query("SELECT d.*,p.persontype,p.condtion FROM deal d JOIN person p ON p.personid=d.personid where paymentdate=? AND d.active=? AND p.persontype='customer' AND p.condtion='not late'",[id,ac], (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
  
      }
  
  
      result(null, res);
    });
  };

  dealf.getdealdaytimerman = (id, result)  => {
    var ac="no"
    sql.query("SELECT * FROM deal where paymentdate=? AND active=?",[id,ac], (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
  
      }
  
  
      result(null, res);
    });
  };
  dealf.getdeal  = (id, result)  => {
    sql.query("SELECT  d.*,u.username FROM deal d  JOIN user u ON d.userid=u.userid WHERE dealid =?",[id], (err, res) => {
      if (err) { console.log("error: ", err); result(err, null);  return; }
      if (res.length) {  result(null, res[0]);
        return;}
      result({ kind: "not_found" }, null);});
  };
  dealf.getpersondeal = (id, result)  => {
    sql.query("SELECT  d.*,u.username FROM deal d  JOIN user u ON d.userid=u.userid where personid=?  ORDER BY d.dealid DESC ",[id], (err, res) => {
      if (err) {console.log("error: ", err);
        result(null, err); }result(null, res);});
  };
  dealf.getpersondealimit = (id, result)  => {
    sql.query("SELECT  d.*,u.username FROM deal d  JOIN user u ON d.userid=u.userid where personid=? AND active='active' ORDER BY d.dealid DESC" ,[id], (err, res) => {
      if (err) {console.log("error: ", err);
        result(null, err); }result(null, res);});
  };
  dealf.deletepersondeal = (id, result)  => {
    sql.query("DELETE FROM deal where personid=?",[id], (err, res) => {
      if (err) { console.log("error: ", err); result(null, err);
      } result(null, res);});
  };
  dealf.deletedeal = (id, result)  => {
    sql.query("DELETE FROM deal where dealid=?",[id], (err, res) => {
      if (err) {  console.log("error: ", err); result(null, err);
      } result(null, res);});
  };
  dealf.updatedeal = (cust, result) => {
    sql.query(
      "UPDATE deal SET dealdate = ?, paymentdate = ?,  dealbalance=?, dealdetails=?,productname=?, discount=?, active=?,discountper=?,addbalance=? WHERE dealid = ?",
      [cust.dealdate,
            cust.paymentdate,
            cust.dealbalance,
            cust.dealdetails,
            cust.productname,
            cust.discount,
            cust.active,
            cust.discountper,
            cust.addbalance,
             cust.dealid],
      (err, res) => {
        if (err) {   console.log("error: ", err);  result(null, err);  return;}if (res.affectedRows == 0) {result({ kind: "not_found" }, null);    return;   }        result(null, {});}
    );
  };
  dealf.insert = (newdeal, result) => {
    sql.query("INSERT INTO deal SET ?", newdeal, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }result(null, {});});
  };
  
    dealf.updatedealAct = (con,dealid, result) => {
    sql.query(
      "UPDATE deal SET   active=? WHERE dealid = ?",
      [con,dealid],
      (err, res) => {
        if (err) {   console.log("error: ", err);  result(null, err);  return;}if (res.affectedRows == 0) {result({ kind: "not_found" }, null);    return;   }        result(null, {});}
    );
  };
      dealf.updatedealunactive = (dd, result) => {
    sql.query(
      "UPDATE deal SET   active='not active' WHERE personid=?",
      [dd.personid],
      (err, res) => {
        if (err) {   console.log("error: ", err);  result(null, err);  return;}if (res.affectedRows == 0) {result({ kind: "not_found" }, null);    return;   }        result(null, {});}
    );
  };
  dealf.insert = (newdeal, result) => {
    sql.query("INSERT INTO deal SET ?", newdeal, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }result(null, {});});
  };
  module.exports= dealf;
  