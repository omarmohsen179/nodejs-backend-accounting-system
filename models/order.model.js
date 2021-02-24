const sql = require("../db");
const orderf= function(order) {
  this.dealid=order.dealid;
  this.itemid=order.itemid;
  this.userid=order.userid;
  this.personid=order.personid;
  this.ordertype= order.ordertype;
  this.orderquantity=  order.quantity;
  this.acceptance=  order.acceptance;
  this.Date=order.Date;
  this.cost=order.cost;
};
orderf.gettimerundoneorders= result => {
  sql.query("SELECT * FROM `order` "+
   " where acceptance IS NULL AND ordertype='out'", (err, res) => {
      if (err) {
          console.log("error: ", err);
          result(null, err);
      }
result(null, res);
  });
};

orderf.getallorders= result => {
    sql.query("SELECT o.*,i.name,i.itemtype,i.price FROM `order` o "+
     " JOIN item i ON o.itemid=i.itemid "+
     " where acceptance IS NOT NULL", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
 result(null, res);
    });
};
orderf.getallorderslimit= result => {
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
  sql.query("SELECT * FROM `order`"+
   " where acceptance IS NOT NULL AND Date LIKE ? OR Date LIKE ? OR Date LIKE ?",[first,second,third], (err, res) => {
      if (err) {
          console.log("error: ", err);
          result(null, err);
      }
result(null, res);
  });
};
orderf.getlastorder= result => {
  sql.query("SELECT * FROM `order` "+
   " ORDER BY orderid DESC LIMIT 1 ", (err, res) => {
      if (err) {
          console.log("error: ", err);
          result(null, err);
      }
result(null, res);
  });
};
orderf.gettimerundoneinout= result => {
  sql.query("SELECT * FROM `order` "+
   " where acceptance IS NULL", (err, res) => {
      if (err) {
          console.log("error: ", err);
          result(null, err);
      }
result(null, res);
  });
};


orderf.getundoneorders= result => {
    sql.query("SELECT o.*,p.personname,p.persontype,i.name,i.quantity,i.itemtype,i.price FROM `order` o "+
     " JOIN person p ON o.personid IS NOT NULL AND p.personid=o.personid "+
     " JOIN item i ON o.itemid=i.itemid "+
     " where acceptance IS NULL", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
 result(null, res);
    });
};
orderf.getdoneorders= result => {
    sql.query("SELECT o.*,p.personname,p.persontype,i.name,i.quantity,i.itemtype,u.username,i.price FROM `order` o JOIN person p ON p.personid=o.personid JOIN item i ON o.itemid=i.itemid JOIN user u ON u.userid=o.userid  where acceptance IS NOT NULL", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
           }
        result(null, res);
    });
};

orderf.getundonesystem= result => {
    sql.query("SELECT o.*,i.name,i.quantity,i.itemtype,u.username,i.price FROM `order` o JOIN item i ON o.itemid=i.itemid JOIN user u ON u.userid=o.userid  where personid IS NULL AND acceptance IS NULL", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);

        }
        result(null, res);
    });
};
orderf.getdonesystem= result => {
  sql.query("SELECT o.*,i.name,i.itemtype,u.username,i.price FROM `order` o JOIN item i ON o.itemid=i.itemid JOIN user u ON u.userid=o.userid  where personid IS NULL AND acceptance IS NOT NULL", (err, res) => {
      if (err) {
          console.log("error: ", err);
          result(null, err);

      }
      result(null, res);
  });
};
orderf.getorderid  = (id, result)  => {
    sql.query("SELECT o.*,i.itemtype,i.price,i.quantity,i.name FROM `order` o  JOIN item i ON o.itemid=i.itemid WHERE o.orderid =? limit 1",[id], (err, res) => {
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
  orderf.getorderunaccept  =  result => {
    sql.query("SELECT o.*,i.name,i.quantity,i.itemtype,i.price FROM `order` o JOIN item i ON o.itemid=i.itemid   where acceptance IS NULL", (err, res) => {
      if (err) {
          console.log("error: ", err);
          result(null, err);
         }
      result(null, res);
  });
  };
  orderf.getorderdeal = (id, result)  => {
    sql.query("SELECT o.*,i.name,i.quantity FROM `order` o JOIN item i ON o.itemid=i.itemid where o.dealid=?  ",[id], (err, res) => {
      if (err) {
  
        result(null, err);
  
      }
  
     
      result(null, res);
    });
  };
    orderf.getorderitem = (id, result)  => {
    sql.query("SELECT o.*,u.username FROM `order` o JOIN user u ON u.userid=o.userid where itemid=? AND acceptance IS NOT NULL",[id], (err, res) => {
      if (err) {
  
        result(null, err);
  
      }
  
      result(null, res);
    });
  };
  orderf.insert = (newdeal, result) => {
    sql.query("INSERT INTO `order` SET ?", newdeal, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
  
      result(null, {});
    });
  };
  orderf.updatacceptance = (orderup, result) => {
    sql.query(
      "UPDATE `order` SET acceptance=? ,Date=?,orderquantity=?,cost=?, userid=? WHERE orderid = ?",
      [orderup.acceptance,orderup.Date,orderup.orderquantity,orderup.cost,orderup.userid,orderup.orderid],
      (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(null, err);
          return;}
        if (res.affectedRows == 0) {
          result({ kind: "not_found" }, null);
          return;}
        result(null, {});
      });
  };
  orderf.deleteitem = (id, result) => {
    sql.query("DELETE FROM `order` WHERE itemid = ?", id, (err, res) => {
      if (err) {
       console.log("error: ", err);
        result(null, err); return;
      }
      if (res.affectedRows == 0) {
        // not found Customer with the id
        result({ kind: "not_found" }, null);  return;
      } result(null, res);
    });
  };
  orderf.deleteorder = (id, result) => {
    sql.query("DELETE FROM `order` WHERE orderid = ?", id, (err, res) => {
      if (err) {
       console.log("error: ", err);
        result(null, err); return;
      }
      if (res.affectedRows == 0) {
        // not found Customer with the id
        result({ kind: "not_found" }, null);  return;
      } result(null, res);
    });
  };
  
    orderf.deletedealorder = (id, result) => {
    sql.query("DELETE FROM `order` WHERE dealid = ?", id, (err, res) => {
      if (err) {
       console.log("error: ", err);
        result(null, err); return;
      }
      if (res.affectedRows == 0) {
        
        result({ kind: "not_found" }, null);  return;
      } result(null, res);
    });
  };
    orderf.deletedealorderoacc = (id, result) => {
       
    sql.query("DELETE FROM `order` WHERE  dealid = ? AND (acceptance IS NULL OR acceptance <> 'ACCEPTED'); ", [id], (err, res) => {
      if (err) {
       console.log("error: ", err);
        result(null, err); return;
      }
      if (res.affectedRows == 0) {
    
        result({ kind:" err" }, null);  return;
      } result(null, res);
    });
  };



  orderf.deleteperson = (id, result) => {
    sql.query("DELETE FROM `order` WHERE personid = ?", id, (err, res) => {
      if (err) { console.log("error: ", err);
        result(null, err);  return;}
      if (res.affectedRows == 0) {
       
        result({ kind: "not_found" }, null);return; }
      result(null, res);
    });
  };

  module.exports= orderf;