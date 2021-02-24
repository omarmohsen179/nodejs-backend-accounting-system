module.exports = app => {
    const fun = require("./controller.js");
  
    app.all("/*", function(req, res, next){
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
        res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
        res.header('client_max_body_size','100GM')
        next();

    });

    app.post("/insertuser/" , fun.insertuser);
    app.get("/users/", fun.findAllusers);
    app.get("/userid/:id", fun.findOneuser);
    app.post("/updateuser/", fun.updateuser);
    app.delete("/deleteuser/:id", fun.deleteuser);

    app.get("/person/", fun.findallperson);
    app.get("/lastperson/", fun.findlastperson);
    app.get("/lateperson/", fun.findlateperson);
    app.get("/personid/:id", fun.findpersonid);
    app.get("/persontype/:type", fun.findpersontype);
    app.post("/updateperson/", fun.updateperson);
    app.post("/insertperson/", fun.insertperson);
    app.delete("/deleteperson/:id", fun.deleteperson);
    app.post("/updatepayment/", fun.updatepersonpayment);
    app.post("/updatepersoncondtion/", fun.updatepersoncondation);

    app.get("/activities/", fun.findallactivity);
    app.get("/activitieslimit/", fun.findallactivitylimit);
    app.get("/activitiesperson/:id", fun.findpersonactivity);
    app.get("/activitiespersonlimit/:id", fun.findpersonactivitylimit);
    app.get("/activitiesitem/:id", fun.finditemactivity);
    app.get("/activitiesitemlimit/:id", fun.finditemactivitylimit);
    app.get("/activitiesborrow/", fun.findborrowactivity);
     app.get("/activitiesborrowdis/", fun.findborrowactivitydis);
    app.get("/activitiesdeal/:id", fun.finddealactivity);
    app.post("/insertactivity/", fun.insertactivity);
    app.delete("/deletedealactivity/:id", fun.deletedealActivity);
    app.delete("/deletedealactivityup/:id", fun.deletedealActivityupdeal);
    app.delete("/deletepersonactivity/:id", fun.deletepersonActivity);
    app.delete("/deleteitemactivity/:id", fun.deleteitemActivity);
    app.delete("/deletechequeactivity/:id", fun.deletechequeActivity);
    app.delete("/deleteorderactivity/:id", fun.deleteorderActivity);
    app.delete("/deleteactivity/:id", fun.deleteActivity);

    app.get("/images/", fun.findAllimages);
    app.get("/imagesperson/:id", fun.findpersonimages);
    app.post("/insertimage/", fun.insertimage);
    app.delete("/deleteimage/:id", fun.deleteimage);

    app.get("/allcash/", fun.findAllcash);
    app.get("/getcashlast/", fun.findlastcash);
    app.post("/insertcash/", fun.insertcash);
    app.get("/allbank/", fun.findAllbank);
    app.get("/getbanklast/", fun.findbanklast);
    app.post("/insertbank/", fun.insertbank);

    app.get("/allcheque/", fun.findAllcheque);
    app.get("/chequeborrow/", fun.findborrowcheque);
    app.get("/chequeborrowunaccept/", fun.findborrowchequeaccept);
    app.get("/chequeborrowid/:id", fun.findchequeborrowid);
    app.get("/cheque/:id", fun.findcheque);
    app.get("/undonecheque/", fun.findundonecheque);
    app.get("/undonechequenumber/", fun.findundonechequenumber);
    app.get("/latecheques/", fun.findlatecheque);
    app.get("/lastcheque/", fun.findlastcheque);
    app.post("/insertcheque/", fun.insertcheque);
    app.post("/updatechequeA/", fun.updatechequeacceptance);
    app.delete("/deletecheque/:id", fun.deletecheque);
    app.delete("/deletechequeperson/:id", fun.deletepersoncheque);
    app.delete("/deletechequedeal/:id", fun.deletedealcheque);

    app.get("/items/", fun.findallitems);
    app.get("/lastitem/", fun.findlastitem);
    app.get("/itemneed/", fun.finditemstneed);
    app.get("/itemproduct/", fun.finditemstproduct);
    app.get("/itemmataccess/", fun.finditemstmaterialaccess);
    app.get("/itemid/:id", fun.finditemid);
    app.post("/insertitem/", fun.insertitem);
    app.post("/updateitem/", fun.updateitem);
    app.post("/updateitemquantity/", fun.updateitemneed);
    app.post("/updateitemneed/", fun.updateitemneed);
    app.delete("/deleteitem/:id", fun.deleteitem);
    
    app.get("/allorders/", fun.findallorders);
    app.get("/allorderslimit/", fun.findallorderslimit);
    app.get("/ordersundone/", fun.findundoneorders);
    app.get("/unacceptorders/", fun.findordersunaccept);
    app.get("/unacceptordersinout/", fun.findunacceptordersio);
    app.get("/ordersdone/", fun.finddoneorders);
    app.get("/ordersundonesystem/", fun.findundoneordersystem);
    app.get("/ordersdonesystem/", fun.finddoneordersystem);
    app.get("/lastorder/", fun.findlastorder);
    app.get("/dealorders/:id", fun.finddealorder);
    app.get("/itemorders/:id", fun.finditemorder);
    app.get("/orderid/:id", fun.findorder);
    app.delete("/deleteorder/:id",fun.deleteorder);
    app.delete("/deletedealorders/:id",fun.deletedealorder);
    app.delete("/deletedealordersaccedit/:id",fun.deletedealorderacc);
    app.delete("/deletepersonorder/:id",fun.deletepersonorder);
    app.delete("/deleteitemorder/:id", fun.deleteitemorder);
    app.post("/insertorder/", fun.insertorder);
    app.post("/updateorderacceptance/",fun.updateorderacceptance);

    app.get("/deals/", fun.findAlldeal);
    app.get("/dealslimit/", fun.findAlldealimit);
    app.get("/dealsnoperson/", fun.findAllnoperson);
    app.get("/dealslateman/", fun.findlateman);
    app.get("/deallast/", fun.getlastdeal);
    app.get("/dealsperson/:id", fun.findpersondeal);
    app.get("/dealspersonlimit/:id", fun.findpersondealimit);
    app.delete("/deletepersondeal/:id", fun.deletepersondeal);
    app.get("/dealsoftoday/:date", fun.findealtoday)
    app.get("/dealid/:id", fun.finddeal);
    app.delete("/deletedeal/:id", fun.deletedeal);
    app.delete("/deletepersondeal/:id", fun.deletepersondeal);
    app.post("/insertdeal/", fun.insertdeal);
    app.post("/updatedeal", fun.upatedeal);
    app.post("/upatedealunactive/", fun.upatedealunactive);
    app.get("/updatedealA/:did/:con", fun.upatedealAct);
};
