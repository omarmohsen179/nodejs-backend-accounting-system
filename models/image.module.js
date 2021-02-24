const sql = require("../db");

const imagef= function(images) {
  this.personid= images.personid;
  this.date = images.date;
  this.image= images.image;
  this.imageurl=images.imageurl
  this.details=images.details
};

imagef.getAllimages= result => {
    sql.query("SELECT * FROM image ", (err, res) => {
      if (err) {
        result(null, err);
  
      }
  
  
      result(null, res);
    });
  };
  
  imagef.getpersonimages = (id, result)  => {
    sql.query("SELECT * FROM image where personid=?",[id], (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
  
      }
  
      result(null, res);
    });
  };
  
  imagef.insert = (newdeal, result) => {
    sql.query("INSERT INTO image SET ?", newdeal, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
  
      result(null, {});
    });
  };
  imagef.delete = (id, result) => {
    sql.query("DELETE FROM image WHERE imageid = ?", id, (err, res) => {
      if (err) {
  
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
  module.exports= imagef;
  