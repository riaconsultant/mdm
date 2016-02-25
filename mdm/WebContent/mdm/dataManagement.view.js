sap.ui.jsview("mdm.dataManagement", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf mdm.dataManagement
	*/ 
	getControllerName : function() {
		return "mdm.dataManagement";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf mdm.dataManagement
	*/ 
	createContent : function(oController) {
		
		var commonLib = sap.ui.commons;
		var mLib = sap.m;
		
		var dropdownLabel = new commonLib.Label({text:"Dropdown"});
		var dropdown = new commonLib.DropdownBox("dropdownId",{
			change : function(oEvent){
				oController.selectValueFromDrpDwn(oEvent);
			}
		});
		var oItemTemplate1 = new sap.ui.core.ListItem();
		oItemTemplate1.bindProperty("text", "value");
		oItemTemplate1.bindProperty("key", "key");
		dropdown.bindItems("/dropdownTable", oItemTemplate1);

		//var mdmDataTable = new sap.ui.table.Table("mdmDataTable");
		
 		return new sap.m.Page({
			title: "Master Data Management",
			content: [
			          dropdownLabel, dropdown
			]
		});
	}

});