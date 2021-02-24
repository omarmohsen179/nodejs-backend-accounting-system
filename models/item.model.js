const sql = require("../db");

// constructor
const itemf= function(item) {
    this.itemtype=item.itemtype;
    this.name=item.name;
    this.quantity=item.quantity;
    this.price= item.price;
    this.Qtype=item.Qtype;
    this.need=item.need;
    this.describtion=item.describtion;
};
itemf.getAllitem= result => {
    sql.query("SELECT * FROM item ", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        result(null, res);
    });
};
itemf.getlastitem=result => {
    sql.query("SELECT * FROM item  ORDER BY itemid DESC LIMIT 1", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        result(null, res);
    });
};
itemf.getitemproduct= result => {
    sql.query("SELECT * FROM item WHERE itemtype='product'", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
  
      }
  
      result(null, res);
    });
  };

  itemf.getitematerial= result => {
    sql.query("SELECT * FROM item WHERE itemtype='material'", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
  
      }
  
      result(null, res);
    });
  };
  itemf.getitematerialaccess= result => {
    sql.query("SELECT * FROM item WHERE itemtype='material' OR itemtype='accessory'", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
  
      }
  
      result(null, res);
    });
  };


  itemf.getitemaccess= result => {
    sql.query("SELECT * FROM item WHERE itemtype='access'", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
  
      }
  
      result(null, res);
    });
  };

  itemf.getneededitem= result => {
    sql.query("SELECT * FROM item WHERE need>0", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
  
      }
      result(null, res);
    });
  };

  
  itemf.getitemid  = (id, result)  => {
    sql.query("SELECT * FROM item WHERE itemid =?",[id], (err, res) => {
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

itemf.updateitemneed= (itemned, result) => {
    sql.query(  "UPDATE item SET  need=?  WHERE itemid = ?",
      [itemned.need,itemned.itemid],
      (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(null, err);
          return;}
        if (res.affectedRows == 0) {
          result({ kind: "not_found" }, null);
          return; }result(null, {});
      }
    );
  };
  itemf.insert = (newdeal, result) => {
    sql.query("INSERT INTO item SET ?", newdeal, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }


        result(null, {});
    });
};
itemf.updateitemquantity= (it, result) => {
    sql.query(  "UPDATE item SET  quantity=?  WHERE itemid = ?",
      [it.quantity,it.itemid],
      (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(null, err);
          return;}
        if (res.affectedRows == 0) {
          result({ kind: "not_found" }, null);
          return; }result(null, {});
      }
    );
  };
  itemf.insert = (newdeal, result) => {
    sql.query("INSERT INTO item SET ?", newdeal, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }


        result(null, {});
    });
};
itemf.delete = (id, result) => {
    sql.query("DELETE FROM item WHERE itemid = ?", id, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }if (res.affectedRows == 0) {
            // not found Customer with the id
            result({ kind: "not_found" }, null);
            return;
        }  result(null, res);
    });
};

itemf.updateitem= (itemup, result) => {
    sql.query(
        "UPDATE item SET  name = ?,Qtype=?, quantity=?,price=?, describtion=?,need=?  WHERE itemid = ?",
        [   itemup.name,
            itemup.Qtype,
            itemup.quantity,
            itemup.price,
            itemup.describtion,
            itemup.need,
            itemup.itemid],
        (err, res) => {
            if (err) {
                result(null, err);
                return;}
            if (res.affectedRows == 0) {
                result({ kind: "not_found" }, null);
                return;
            }  result(null, {});  }
    )};

    
module.exports=itemf;