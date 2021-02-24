
const users = require("./models/user.model");
const personf = require("./models/person.model");
const activityf = require("./models/activity.model");
const dealf = require("./models/deal.model");
const bankf = require("./models/bank.model");
const cashf = require("./models/cash.model");
const chequef = require("./models/cheque.model");
const imagef = require("./models/image.module");
const itemf = require("./models/item.model");
const orderf = require("./models/order.model");
const storeff = require("./models/store.model");


exports.findAllusers = (req, res) => {
    users.getAll((err, data) => {
         if (err)
           res.status(500).send({
             message:
               err.message || "Some error occurred"
           });
         else res.send(data);
       });
 };

 exports.findOneuser = (req, res) => {
    users.findById(req.params.id, (err, data) => {
         if (err) {
           if (err.kind === "not_found") {
             res.status(404).send({
               message: `Not found`}); } else {
             res.status(500).send({  message: "Error"  });
           }
         } else res.send(data);
       });
 };
 exports.updateuser = (req, res) => {

     var postData  = {
       userid:req.body.userid,
       username:req.body. username
       ,password:req.body.password
       ,type:req.body.type
     };

      users.updateById( postData,  (err, data) => {
           if (err) {
             if (err.kind === "not_found") {
               res.status(404).send({ message: `Not found` });
             } else {
               res.status(500).send({ message: "Error " });
             }
           }
           else res.send(data);
         }
       );
 };
 exports.deleteuser = (req, res) => {

     users.deleteuser(req.params.id, (err, data) => {
         if (err) {
           if (err.kind === "not_found") {
             res.status(404).send({
               message: `Not found`
             });
           } else {
             res.status(500).send({
               message: "Could not delete "
             });
           }
         } else res.send({ message: `deleted successfully!` });
       });
 };

 exports.insertuser = (req, res) => {
     var postData  = {
       username:req.body.username
       ,password:req.body.password
       ,type:req.body.type
     };

  users.insert(postData,(err, data) => {


     if (err) {
       if (err.kind === "not_found") {   res.status(404).send({ message: `Not found`  });
       } else { res.status(500).send({  message: "Error"}); }
     } else{
        res.send(data);
       }
   });


 };










 //person





 exports.findallperson = (req, res) => {


    personf.getAllperson((err, data) => {
      //status code HTTP 200 / OK
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred "
        });

      else res.send(data);

    });
  };
   exports.findlastperson = (req, res) => {


    personf.getlastperson((err, data) => {
      //status code HTTP 200 / OK
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred "
        });

      else res.send(data);

    });
  };
  exports.findlateperson = (req, res) => {
    personf.getlateperson((err, data) => {
      if (err)
        res.status(500).send({  message: err.message || "Some error occurred"});
      else res.send(data);

    });
  };
  exports.findpersonid = (req, res) => {
    personf.getpersonid(req.params.id, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({  message: `Not found`  });
        } else {  res.status(500).send({     message: "Error"  });
        }
      } else res.send(data);
    });
  };
  exports.findpersontype = (req, res) => {
    personf.gettypeperson(req.params.type, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({message: `Not found` });
        } else {
          res.status(500).send({   message: "Error" });
        }
      } else res.send(data);
    });
  };





  exports.updateperson= (req, res) => {

    var custmerdata = {
   personid:req.body.personid,
      personname:req.body.personname,
      phonenumber:req.body.phonenumber
      ,address:req.body.address
      ,condtion:req.body.condtion
      ,payment:req.body.payment
      ,balance:req.body.balance,
      note:req.body.note
    };

    personf.updateperson(custmerdata,(err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({    message: `Not found`   }); } else {   res.status(500).send({  message: "Error "  })   }
        } else res.send(data);
      }
    );
  };


  exports.insertperson = (req, res) => {
    var custmerdata = {
      persontype:req.body.persontype,
      personname:req.body.personname
      ,phonenumber:req.body.phonenumber
      ,address:req.body.address
      ,condtion:req.body.condtion
      ,payment:req.body.payment
      ,balance:req.body.balance
      ,note:req.body.note
    };
    personf.insert( custmerdata ,(err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found`  });   } else {      res.status(500).send({        message: "Error "     });
        }
      } else{
        res.send(data);
      }
    });


  };
  exports.deleteperson = (req, res) => {
    personf.deleteperson(req.params.id, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({      message: `Not found` });
        } else { res.status(500).send({   message: "Could not delete "      });    }
      } else res.send({ message: ` deleted successfully!` });
    });
  };
  exports.updatepersonpayment = (req, res) => {
    var person = {
      personid:req.body.personid
      ,payment:req.body.payment
      ,balance:req.body.balance
      ,condtion:req.body.condtion
    };
   personf.updatepayment(person,(err, data) => {


      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found`
          });
        } else {
          res.status(500).send({
            message: "Error person Customer with id "
          });
        }
      } else{
        res.send(data);
      }
    });

  };
  exports.updatepersoncondation = (req, res) => {
    personf.updatcondtion(req.body.personid,(err, data) => {

      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found`
          });
        } else {
          res.status(500).send({
            message: "Error  "
          });
        }
      } else{
        res.send(data);
      }
    });
  };













  exports.findallactivity = (req, res) => {
    activityf.getAllacitivy((err, data) => {
        //status code HTTP 200 / OK
        if (err)
          res.status(500).send({
            message:
              err.message || "Some error occurred"
          });

        else res.send(data);

      });
  };
  exports.findallactivitylimit = (req, res) => {
    activityf.getAllacitivylimit((err, data) => {
        //status code HTTP 200 / OK
        if (err)
          res.status(500).send({
            message:
              err.message || "Some error occurred"
          });

        else res.send(data);

      });
  };

  exports.findpersonactivity = (req, res) => {
    activityf.getpersonacitivy(req.params.id, (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found`
            });
          } else {
            res.status(500).send({
              message: "Could not delete "
            });
          }
        } else res.send(data);
      });
};

exports.findpersonactivitylimit = (req, res) => {
  activityf.getpersonacitivylimit(req.params.id, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found`
          });
        } else {
          res.status(500).send({
            message: "Could not delete "
          });
        }
      } else res.send(data);
    });
};

exports.finddealactivity = (req, res) => {
  activityf.getdealacitivy(req.params.id, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found`
          });
        } else {
          res.status(500).send({
            message: "Could not  "
          });
        }
      } else res.send(data);
    });
};
exports.findborrowactivity = (req, res) => {
  activityf.getborrowacitivy((err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found`
          });
        } else {
          res.status(500).send({
            message: "Could not delete"
          });
        }
      } else res.send(data);
    });
};
exports.findborrowactivitydis = (req, res) => {
  activityf.getborrowacitivydis( (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found`
          });
        } else {
          res.status(500).send({
            message: "Could not delete Customer with id "
          });
        }
      } else res.send(data);
    });
};
exports.finditemactivity = (req, res) => {
  activityf.getitemacitivy(req.params.id, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found`
          });
        } else {
          res.status(500).send({
            message: "Could not delete"
          });
        }
      } else res.send(data);
    });
};
exports.finditemactivitylimit = (req, res) => {
  activityf.getitemacitivylimit(req.params.id, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found`
          });
        } else {
          res.status(500).send({
            message: "Could not delete"
          });
        }
      }
      else res.send(data);
    });
};

  exports.deleteitemActivity = (req, res) => {
    activityf.deleteitemactivity(req.params.id, (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found`
            });
          } else {
            res.status(500).send({
              message: "Could not delete "
            });
          }
        } else res.send({ message: ` deleted successfully!` });
      });
};

  exports.deletechequeActivity = (req, res) => {
    activityf.deletechequeactivity(req.params.id, (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found`
            });
          } else {
            res.status(500).send({
              message: "Could not delete"
            });
          }
        } else res.send({ message: `deleted successfully!` });
      });
};
exports.deletepersonActivity = (req, res) => {
  activityf.deletepersonactivity(req.params.id, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found`
          });
        } else {
          res.status(500).send({
            message: "Could not delete "
          });
        }
      } else res.send({ message: ` deleted successfully!` });
    });
};
exports.deletedealActivity = (req, res) => {
  activityf.deletedealactivity(req.params.id, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found`
          });
        } else {
          res.status(500).send({
            message: "Could not delete "
          });
        }
      } else res.send({ message: `deleted successfully!` });
    });
};
exports.deletedealActivityupdeal = (req, res) => {
  activityf.deletedealactivityupdeal(req.params.id, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found`
          });
        } else {
          res.status(500).send({
            message: "Could not delete "
          });
        }
      } else res.send({ message: `deleted successfully!` });
    });
};
exports.deleteActivity = (req, res) => {
  activityf.deleteactivity(req.params.id, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found`
          });
        } else {
          res.status(500).send({
            message: "Could not delete "
          });
        }
      } else res.send({ message: `Customer was deleted successfully!` });
    });
};
exports.deleteorderActivity = (req, res) => {
  activityf.deleteorderactivity(req.params.id, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found`
          });
        } else {
          res.status(500).send({
            message: "Could not delete "
          });
        }
      } else res.send({ message: ` deleted successfully!` });
    });
};

exports.insertactivity = (req, res) => {
  var cactivity = {
  type:req.body.type
    ,details:req.body.details
    ,cost:req.body.cost
    ,Date:req.body.Date,
    dealid:req.body.dealid
    ,userid:req.body.userid
    ,personid:req.body.personid
    ,orderid:req.body.orderid
    ,bankid:req.body.bankid,
    cashid:req.body.cashid,
    chequeid:req.body.chequeid,
    itemid:req.body.itemid,
    bname:req.body.bname
  };
  activityf.insert( cactivity,(err, data) => {


  if (err) {
    if (err.kind === "not_found") {
      res.status(404).send({
        message: `Not found`
      });
    } else {
      res.status(500).send({
        message: "Error  "   });
    }
  } else{
     res.send(data);
    }
});
};


















exports.findAllimages= (req, res) => {
imagef.getAllimages((err, data) => {
    if (err) res.status(500).send({   message:err.message || "Some error occurred"  });
    else res.send(data);

  });
};

exports.findpersonimages= (req, res) => {
  imagef.getpersonimages(req.params.id,(err, data) => {

    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred"
      });

    else res.send(data);

  });
};


exports.insertimage= (req, res) => {
  var product= {
    image:req.body.image
    ,imageurl:req.body.imageurl
    ,details:req.body.details
    ,date:req.body.date
    ,personid:req.body.personid
  };

  imagef.insert( product ,(err, data) => {


    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found`
        });
      } else {
        res.status(500).send({
          message: "Error "
        });
      }
    } else{
      res.send(data);
    }
  });
};


exports.deleteimage = (req, res) => {

  imagef.delete(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found.`
        });
      } else {
        res.status(500).send({
          message: "Could not delete "
        });
      }
    } else res.send({ message: `Customer was deleted successfully!` });
  });
};


















exports.findAllcash= (req, res) => {
  cashf.getallcash((err, data) => {
    //status code HTTP 200 / OK
    if (err)
      res.status(500).send({  message:  err.message || "Some error occurred." });
   else res.send(data); });
};
exports.findlastcash= (req, res) => {
  cashf.getlast((err, data) => {
    if (err)
     res.status(500).send({ message:  err.message || "Some error occurred ."   });
    else res.send(data); });
  };
exports.insertcash = (req, res) => {
  var custmerdata = {
    userid:req.body.userid
    ,date:req.body.date
    ,details:req.body.details
    ,balance:req.body.balance
  };
  cashf.insert( custmerdata ,(err, data) => {
    if (err) {
      if (err.kind === "not_found") { res.status(404).send({   message: `Not found Customer with id ${req.params.u}.` });} else { res.status(500).send({ message: "Error retrieving Customer with id " + req.params.customerId
      });}} else{ res.send(data); } });
};








exports.findAllbank= (req, res) => {
  bankf.getallbank((err, data) => {

    if (err)
      res.status(500).send({ message:    err.message || "Some error occurred ."});
  else res.send(data);});
};
exports.findbanklast= (req, res) => {
  bankf.getlastbank((err, data) => {

    if (err)
      res.status(500).send({  message:   err.message || "Some error occurred ." });
    else res.send(data);

  });
};
exports.insertbank = (req, res) => {
  var custmerdata = {
    userid:req.body.userid
    ,date:req.body.date
    ,balance:req.body.balance
    ,details:req.body.details
  };
  bankf.insert( custmerdata ,(err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving "
        });
      }  } else{ res.send(data); }
  });


};














exports.findAllcheque= (req, res) => {
  chequef.getallcheque((err, data) => {

    if (err)
      res.status(500).send({    message:     err.message || "Some error occurred." });

    else res.send(data);

  });
};
exports.findundonecheque= (req, res) => {
  chequef.getchequesnull((err, data) => {
    //status code HTTP 200 / OK
    if (err)
      res.status(500).send({   message: err.message || "Some error occurred."   });
      else res.send(data);

  });
};
exports.findundonechequenumber= (req, res) => {
  chequef.getchequesnullnumber((err, data) => {
    //status code HTTP 200 / OK
    if (err)
      res.status(500).send({   message: err.message || "Some error occurred."   });
      else res.send(data);

  });
};
exports.findlatecheque= (req, res) => {
  chequef.getcondchequesnotnull((err, data) => {

    if (err)
      res.status(500).send({  message:     err.message || "Some error occurred."});
  else res.send(data); });
};

exports.findAllcheque= (req, res) => {
  chequef.getallcheque((err, data) => {

    if (err)
      res.status(500).send({    message:     err.message || "Some error occurred." });

    else res.send(data);

  });
};
exports.findborrowcheque= (req, res) => {
  chequef.getborrowcheque((err, data) => {

    if (err)   res.status(500).send({   message: err.message || "Some error occurred."   });
      else res.send(data);  });
};
exports.findborrowchequeaccept= (req, res) => {
  chequef.getborrowchequeunaccepted((err, data) => {

    if (err)   res.status(500).send({   message: err.message || "Some error occurred."   });
      else res.send(data);  });
};
exports.findlatecheque= (req, res) => {
  chequef.getcondchequesnotnull((err, data) => {

    if (err)
      res.status(500).send({  message:     err.message || "Some error occurred."});
  else res.send(data); });
};


exports.findchequeborrowid= (req, res) => {
  chequef.getborchequeid(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({   message: `Not found`  });
      } else {   res.status(500).send({    message: "Error"  });
      }
    } else res.send(data);
  });
};



exports.findbankcheque= (req, res) => {


  chequef.getcbankcheques((err, data) => {
    //status code HTTP 200 / OK
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred."
      });

    else res.send(data);

  });
};

exports.findlastcheque= (req, res) => {
  chequef.getlastcheque((err, data) => {
    //status code HTTP 200 / OK
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error."
      });

    else res.send(data);

  });
};





exports.findcheque= (req, res) => {
  chequef.getcheque(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({   message: `Not found`  });
      } else {   res.status(500).send({    message: "Error"  });
      }
    } else res.send(data);
  });
};
exports.insertcheque = (req, res) => {
  var custmerdata = {
    userid:req.body.userid
    ,personid:req.body.personid,
    dealid:req.body.dealid
    ,date:req.body.date
    ,balance:req.body.balance
    ,details:req.body.details
    ,enddate:req.body.enddate
    ,acceptance:req.body.acceptance
    ,bankname:req.body.bankname
    ,bankcost:req.body.bankcost
    ,cond:req.body.cond
    ,place:req.body.place
    ,bankdate:req.body.bankdate
    ,borrowname:req.body.borrowname
    ,barcon:req.body.barcon
  };

  chequef.insert( custmerdata ,(err, data) => {


    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found `
        });
      } else {
        res.status(500).send({
          message: "Error retrieving "
        });
      }
    } else{
      res.send(data);
    }
  });


};
exports.updatechequeacceptance = (req, res) => {
  var custmerdata = {
    date:req.body.date
    ,acceptance:req.body.acceptance
    ,bankcost:req.body.bankcost
    ,bankdate:req.body.bankdate
    ,cond:req.body.cond
    ,place:req.body.place
    ,chequeid:req.body.chequeid
    ,bankdate:req.body.bankdate
    ,answerdate:req.body.answerdate
  };
  chequef.updatacceptance( custmerdata ,(err, data) => {


    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found `
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Customer with id "
        });
      }
    } else{
      res.send(data);
    }
  });


};

exports.deletecheque = (req, res) => {

  chequef.delete(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found`
        });
      } else {
        res.status(500).send({
          message: "Could not delete Customer with id "
        });
      }
    } else res.send({ message: `Customer was deleted successfully!` });
  });
};
exports.deletepersoncheque = (req, res) => {

  chequef.deleteperson(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found`
        });
      } else {
        res.status(500).send({
          message: "Could not delete "
        });
      }
    } else res.send({ message: `Customer was deleted successfully!` });
  });
};

exports.deletedealcheque = (req, res) => {

  chequef.deletedeal(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found`
        });
      } else {
        res.status(500).send({
          message: "Could not delete "
        });
      }
    } else res.send({ message: `Customer was deleted successfully!` });
  });
};































exports.findallitems = (req, res) => {
  itemf.getAllitem((err, data) => {
    //status code HTTP 200 / OK
    if (err)
      res.status(500).send({
        message:
            err.message || "Some error occurred"
      });else res.send(data);});
};
exports.findlastitem = (req, res) => {
  itemf.getlastitem((err, data) => {
    //status code HTTP 200 / OK
    if (err)
      res.status(500).send({
        message:
            err.message || "Some error occurred"
      });else res.send(data);});
};
exports.finditemstneed = (req, res) => {
  itemf.getneededitem((err, data) => {
    //status code HTTP 200 / OK
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred"
      });
    else res.send(data); });
};
exports.finditemstproduct = (req, res) => {
  itemf.getitemproduct((err, data) => {
    //status code HTTP 200 / OK
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred"
      });
    else res.send(data); });
};


exports.finditemstmaterialaccess = (req, res) => {
  itemf.getitematerialaccess((err, data) => {
    //status code HTTP 200 / OK
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred"
      });
    else res.send(data); });
};
exports.finditemid= (req, res) => {
   itemf.getitemid(req.params.id,(err, data) => {

    if (err)
      res.status(500).send({
        message:
            err.message || "Some error occurred"
      });
    else res.send(data);
  });
};


exports.insertitem= (req, res) => {
  var product= {
    itemtype:req.body.itemtype,
    name:req.body.name
    ,price:req.body.price
    ,quantity:req.body.quantity
    ,describtion:req.body.describtion
    ,need:req.body.need
    ,Qtype:req.body.Qtype};
  itemf.insert( product ,(err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found ` }); } else { res.status(500).send({ message: "Error " });
       }} else{ res.send(data); }
  });
};
exports.updateitem= (req, res) => {
  var product= {
    itemid:req.body.itemid,
    name:req.body.name,
    price:req.body.price
    ,quantity:req.body.quantity
    ,describtion:req.body.describtion
    ,need:req.body.need
    ,Qtype:req.body.Qtype };
  itemf.updateitem(product,(err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found`});
      } else { res.status(500).send({   message: "Error "});}} else{
      res.send(data);  }});

};
exports.updateitemneed= (req, res) => {
  var product= {
    itemid:req.body.itemid
    ,need:req.body.need };
  itemf.updateitemneed(product,(err, data) => {
    if (err) {
      if (err.kind === "not_found") {res.status(404).send({   message: `Not found`});
      } else { res.status(500).send({   message: "Error retrieving Customer with id " });
      }
    } else{
      res.send(data);
    }
  });
};
exports.updateitemneed= (req, res) => {
  var product= {
    itemid:req.body.itemid
    ,quantity:req.body.quantity

  };
  itemf.updateitemquantity(product,(err, data) => {
    if (err) {
      if (err.kind === "not_found") {res.status(404).send({   message: `Not found`});
      } else { res.status(500).send({   message: "Error" });
      }
    } else{
      res.send(data);
    }
  });
};
exports.deleteitem= (req, res) => {
 itemf.delete(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({message: `Not found Customer with id ${req.params.customerId}.`  }); } else { res.status(500).send({  message: "Could not delete Customer with id " + req.params.customerId  });  }}
          else res.send({ message: `Customer was deleted successfully!` }); });
};











exports.findallorders= (req, res) => {
  orderf.getallorders((err, data) => {

    if (err)
      res.status(500).send({
        message:
            err.message || "Some error occurred while retrieving customers."
      });


    else res.send(data);


  });
};
exports.findallorderslimit= (req, res) => {

  orderf.getallorderslimit((err, data) => {

    if (err)
      res.status(500).send({
        message:
            err.message || "Some error occurred while retrieving customers."
      });


    else res.send(data);


  });
};





exports.findordersunaccept= (req, res) => {
  orderf.getorderunaccept((err, data) => {
    //status code HTTP 200 / OK
    if (err)
      res.status(500).send({
        message:
            err.message || "Some error occurred while retrieving customers."
      });


    else res.send(data);


  });
};
exports.finddoneorders= (req, res) => {
  orderf.getdoneorders((err, data) => {
    //status code HTTP 200 / OK
    if (err)
      res.status(500).send({
        message:
            err.message || "Some error occurred while retrieving customers."
      });


    else res.send(data);


  });
};




exports.findundoneorders= (req, res) => {
  orderf.getundoneorders((err, data) => {

    if (err)
      res.status(500).send({
        message:
            err.message || "Some error occurred while retrieving customers."
      });


    else res.send(data);


  });
};


exports.findunacceptordersio= (req, res) => {
  orderf.gettimerundoneinout((err, data) => {
    if (err)
      res.status(500).send({ message:   err.message || "Some error occurred while retrieving customers."});
    else res.send(data);
  });
};
exports.finddoneorders= (req, res) => {
  orderf.getdoneorders((err, data) => {
    //status code HTTP 200 / OK
    if (err)
      res.status(500).send({
        message:
            err.message || "Some error occurred while retrieving customers."
      });


    else res.send(data);


  });
};

exports.findundoneordersystem= (req, res) => {
  orderf.getundonesystem((err, data) => {
    //status code HTTP 200 / OK
    if (err)
      res.status(500).send({
        message:
            err.message || "Some error occurred while retrieving customers."
      });


    else res.send(data);


  });
};
exports.finddoneordersystem= (req, res) => {
  orderf.getdonesystem((err, data) => {
    //status code HTTP 200 / OK
    if (err)
      res.status(500).send({
        message:
            err.message || "Some error occurred while retrieving customers."
      });


    else res.send(data);


  });
};
exports.findlastorder= (req, res) => {
  orderf.getlastorder((err, data) => {
    //status code HTTP 200 / OK
    if (err)
      res.status(500).send({
        message:
            err.message || "Some error occurred while retrieving customers."
      });


    else res.send(data);


  });
};

exports.finditemorder = (req, res) => {
  orderf.getorderitem(req.params.id,(err, data) => {

    if (err)
      res.status(500).send({
        message:
            err.message || "Some error occurred while retrieving customers."
      });

    else res.send(data);

  });
};

exports.finddealorder = (req, res) => {
  orderf.getorderdeal(req.params.id,(err, data) => {

    if (err)
      res.status(500).send({
        message:
            err.message || "Some error occurred while retrieving customers."
      });

    else res.send(data);

  });
};

exports.finditemorder = (req, res) => {
  orderf.getorderitem(req.params.id,(err, data) => {

    if (err)
      res.status(500).send({
        message:
            err.message || "Some error occurred while retrieving customers."
      });

    else res.send(data);

  });
};
exports.findorder = (req, res) => {
  orderf.getorderid(req.params.id,(err, data) => {

    if (err)
      res.status(500).send({
        message:
            err.message || "Some error occurred while retrieving customers."
      });

    else res.send(data);

  });
};



exports.insertorder = (req, res) => {
  var order = {
    ordertype:req.body.ordertype
    ,orderquantity:req.body.orderquantity,
    itemid:req.body.itemid
    ,dealid:req.body.dealid,
    acceptance:req.body.acceptance,
    Date:req.body.Date
    ,note:req.body.note
    ,cost:req.body.cost
    ,userid:req.body.userid,
    personid:req.body.personid
  };

  orderf.insert( order ,(err, data) => {


    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Customer with id .`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Customer with id "
        });
      }
    } else{
      res.send(data);
    }
  });
};
exports.updateorderacceptance= (req, res) => {
  var orderac = {
    orderid:req.body.orderid,
    acceptance:req.body.acceptance,
       orderquantity:req.body.orderquantity,
       cost:req.body.cost,
    Date:req.body.Date,
    userid:req.body.userid
  };
  orderf.updatacceptance( orderac,(err, data) => {
    if (err) {
      if (err.kind === "not_found") { res.status(404).send({   message: `Not found Customer with id.`});
      } else { res.status(500).send({ message: "Error retrieving Customer with id " });
      }
    }
     else{
      res.send(data);
    }
  });
};

exports.findundonecostorder = (req, res) => {
  orderf.getundoneorders(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({   message: "error"});
      } else {
        res.status(500).send({   message: "Error" });
      }
    } else res.send(data);
  });
};
exports.deleteorder= (req, res) => {
  orderf.deleteorder(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({   message: `Not found Customer with id.`    }); } else {  res.status(500).send({  message: "Could not delete "   });
      } } else res.send({ message: ` deleted successfully!` });
  });
};

exports.deletedealorder= (req, res) => {
  orderf.deletedealorder(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({   message: `Not found.`    }); } else {  res.status(500).send({  message: "Could not delete  "   });
      } } else res.send({ message: ` deleted successfully!` });
  });
};
exports.deletedealorderacc= (req, res) => {
  orderf.deletedealorderoacc(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({   message: `Not found.`    }); } else {  res.status(500).send({  message: "Could not delete  "   });
      } } else res.send({ message: ` deleted successfully!` });
  });
};
exports.deletepersonorder= (req, res) => {
  orderf.deleteperson(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({message: `Not found `});
      } else {
        res.status(500).send({ message: "Could not delete  "
        }); } } else res.send({ message: `deleted successfully!` });
  });
};
exports.deleteitemorder= (req, res) => {
  orderf.deleteitem(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {    res.status(404).send({   message: `Not found` });} else { res.status(500).send({   message: "Could not delete " });
  }
    } else res.send({ message: `deleted successfully!` });
  });
};



















exports.findAlldeal = (req, res) => {


  dealf.getAlldeals((err, data) => {
      //status code HTTP 200 / OK
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred "
        });

      else res.send(data);

    });
};


exports.findAlldealimit = (req, res) => {


  dealf.getAlldealslimit((err, data) => {
      //status code HTTP 200 / OK
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred "
        });

      else res.send(data);

    });
};
exports.findAllnoperson = (req, res) => {


  dealf.getnoperson((err, data) => {
      //status code HTTP 200 / OK
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred "
        });

      else res.send(data);

    });
};
exports.findlateman = (req, res) => {


  dealf.getlateman((err, data) => {
      //status code HTTP 200 / OK
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred "
        });

      else res.send(data);

    });
};
exports.getlastdeal = (req, res) => {


  dealf.getlastdeal((err, data) => {
      //status code HTTP 200 / OK
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred"
        });

      else res.send(data);

    });
};
exports.findpersondeal = (req, res) => {


  dealf.getpersondeal(req.params.id,(err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving customers."
        });
      else res.send(data); });
};
exports.findpersondealimit = (req, res) => {

  dealf.getpersondealimit(req.params.id,(err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving customers."
        });
      else res.send(data); });
};
exports.deletepersondeal = (req, res) => {
  dealf.deletepersondeal(req.params.id,(err, data) => {

    if (err)
      res.status(500).send({
        message:
            err.message || "Some error occurred while retrieving customers."
      });

    else res.send(data);

  });
};
exports.deletedeal = (req, res) => {
  dealf.deletedeal(req.params.id,(err, data) => {
     if (err)  res.status(500).send({
        message:
            err.message || "Some error occurred while retrieving customers."
      });  else res.send(data); });
};
exports.findealtoday= (req, res) => {
  dealf.getdealday(req.params.date,(err, data) => {
    if (err) res.status(500).send({  message:    err.message || "Some error occurred while retrieving customers."});
  else res.send(data);});
};
exports.deletepersondeal = (req, res) => {
  dealf.deletepersondeal(req.params.id,(err, data) => {
     if (err)  res.status(500).send({
        message:
            err.message || "Some error occurred while retrieving customers."
      });  else res.send(data); });
};
exports.findealtoday= (req, res) => {
  dealf.getdealday(req.params.date,(err, data) => {
    if (err) res.status(500).send({  message:    err.message || "Some error occurred while retrieving customers."});
  else res.send(data);});
};



exports.insertdeal = (req, res) => {
  var deal = {
    dealtype:req.body.dealtype
    ,dealdate:req.body.dealdate
    ,paymentdate:req.body.paymentdate
    ,productname:req.body.productname
    ,dealbalance:req.body.dealbalance
    ,dealdetails:req.body.dealdetails
    ,discount:req.body.discount,
    active:req.body.active,
    discountper:req.body.discountper
    ,addbalance:req.body.addbalance
    ,personid:req.body.personid
    ,userid:req.body.userid
  };
  dealf.insert( deal ,(err, data) => {

  if (err) {
    if (err.kind === "not_found") {
      res.status(404).send({
        message: `Not found Customer with id.`
      });
    } else {
      res.status(500).send({
        message: "Error retrieving Customer with id "
      });
    }
  } else{
     res.send(data);
    }
});
};
exports.upatedeal = (req, res) => {
  var deal = {
    dealid:req.body.dealid
    ,dealdate:req.body.dealdate
    ,paymentdate:req.body.paymentdate
    ,productname:req.body.productname
    ,quantity:req.body.quantity
    ,dealbalance:req.body.dealbalance
    ,dealdetails:req.body.dealdetails
    ,discount:req.body.discount,
    active:req.body.active
    ,discountper:req.body.discountper
    ,addbalance:req.body.addbalance
  };
  dealf.updatedeal(deal ,(err, data) => {
  if (err) {
    if (err.kind === "not_found") { res.status(404).send({   message: `Not found Customer with id.` });  } else {     res.status(500).send({     message: "Error retrieving Customer with id " });  }}
  else{
     res.send(data);
    }
});
};
exports.upatedealunactive = (req, res) => {
  var deal = {
    personid:req.body.personid
  };
  dealf.updatedealunactive(deal ,(err, data) => {
  if (err) {
    if (err.kind === "not_found") { res.status(404).send({   message: `Not found Customer with id.` });  } else {     res.status(500).send({     message: "Error retrieving Customer with id " });  }}
  else{
     res.send(data);
    }
});
};
exports.upatedealAct = (req, res) => {
  dealf.updatedealAct(  req.params.con,req.params.did,(err, data) => {

  if (err) {
    if (err.kind === "not_found") {
      res.status(404).send({
        message: `Not found Customer with id ${req.params.u}.`
      });
    } else {
      res.status(500).send({
        message: "Error retrieving Customer with id " + req.params.customerId
      });
    }
  } else{
     res.send(data);
    }
});
};
exports.finddeal = (req, res) => {

   dealf.getdeal(req.params.id, (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found Customer with id`
            });
          } else {
            res.status(500).send({
              message: "Error retrieving Customer with id "
            });
          }
        } else res.send(data);
      });
};
/*
var custmerdealsreminder = setInterval(function () {

  var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0');
var yyyy = today.getFullYear();
      let todaydate= yyyy + "-" + mm + "-" + dd

   dealf.getdealdaytimer(todaydate,(err, data) => {
    if (err) res.status(500).send({  message:    err.message || "Some error occurred while retrieving customers."});
  else {

      for(var i=0;i<data.length;i++){

          if(data[i].persontype=="customer"&&data[i].condtion!="late"){
        personf.updatcondtion(data[i].personid,(err, data) => {

      if (err) {
        if (err.kind === "not_found") {
        console.log("error in the today deal timer function")
      }

      }

        });}


      }
 }
})

dealf.getdealdaytimerman(todaydate,(err, data) => {
  if (err) res.status(500).send({  message:    err.message || "Some error occurred while retrieving customers."});
else {

    for(var i=0;i<data.length;i++){


      dealf.updatedealAct("deadline",data[i].dealid,(err, data) => {

    if (err) {
      if (err.kind === "not_found") {
      console.log("error in the today deal timer function")
    }

    }

      });


    }
}
  });
}, 2300);


var chequechecker = setInterval(function () {

  chequef.gettimerfunction((err, data) => {

    //status code HTTP 200 / OK
    if (err)
      res.status(500).send({  message:     err.message || "Some error occurred while retrieving customers."   });
    else{

      let date_ob = new Date();
      var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();
      let todaydate= yyyy + "-" + mm + "-" + dd

      for(var i=0;i<data.length;i++){
        if(data[i].enddate==todaydate){

          data[i].cond="late"

          chequef.updatetimercond( data[i] ,(err, data) => {
            if (err) {
              if (err.kind === "not_found") {
                res.send({message: `Not found Customer with id .` });  } else {res.send({  message: "Error retrieving Customer with id "  });  }} });  }}
 }
  });
}, 2300);








var itemneed = setInterval(function () {
    storeff.getstoreitems((err, data) => {
        //status code HTTP 200 / OK
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred"
            });

        else console.log(data);

    });
  orderf.gettimerundoneorders((err, data) => {  if (err) res.status(500).send({    message:    err.message || "Some error occurred while retrieving customers."  });
    else{
      var orders=data;
 itemf.getAllitem((err, data) => {
       if (err) res.status(500).send({  message:   err.message || "Some error occurred while retrieving customers."});
        else{
          var item=data;

          for(var i=0;i<item.length;i++){
            var countorder=0
            for(var j=0;j<orders.length;j++){
              if(orders[j].itemid==item[i].itemid&&!orders[j].acceptance){

                countorder+=orders[j].orderquantity
              }
            }

              let q=countorder-(item[i].quantity)
              if(q>=0&&item[i].need!=q){
                item[i].need=q
                itemf.updateitemneed(item[i],(err, data) => {
                  if (err) {
                    if (err.kind === "not_found") { res.status(404).send({    message: `Not found Customer with id.` });} else {   res.status(500).send({ message: "Error retrieving" }); }
                  }
                });
              }else if(q<0&&item[i].need!=0){
                item[i].need=0
                itemf.updateitemneed(item[i],(err, data) => {
                  if (err) { if (err.kind === "not_found") {  res.status(404).send({ message: `Not found Customer with id.` });} else {  res.status(500).send({   message: "Error retrieving Customer with id " + req.params.customerId});  } }
                }); }}
          }
      })
    }
  });
}, 2500);

*/
