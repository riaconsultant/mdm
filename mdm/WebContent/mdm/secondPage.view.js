sap.ui.jsview("mdm.secondPage", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf mdm.secondPage
	*/ 
	getControllerName : function() {
		return "mdm.secondPage";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf mdm.secondPage
	*/ 
	createContent : function(oController) {
		
		var commonLib = sap.ui.commons;
		var mLib = sap.m;
		
		var dropdownLabel = new commonLib.Label({text:"Dropdown"});
		var dropdown = new commonLib.DropdownBox("dropdownSelectedId",{
			change : function(oEvent){
				oController.selectValueFromDrpDwn(oEvent);
			}
		});
		var oItemTemplate1 = new sap.ui.core.ListItem();
		oItemTemplate1.bindProperty("text", "value");
		oItemTemplate1.bindProperty("key", "key");
		dropdown.bindItems("/dropdownTable", oItemTemplate1);

		var mdmDataTable = new sap.ui.table.Table("mdmDataTable",{
			toolbar: new sap.ui.commons.Toolbar({
				items: [
                 		new sap.ui.commons.Button({text: "Add", press: function(oEvent) { oController.addDataInTable(oEvent)}}),
             			new sap.ui.commons.Button({text: "Update", press: function(oEvent) {oController.updateDataInTable(oEvent)}}),
         				new sap.ui.commons.Button({text: "Delete", press: function(oEvent) {oController.deleteDataInTable(oEvent)}})
                 	]}),
		});
		
 		return new sap.m.Page({
			title: "Master Data Management",
			content: [
			          dropdownLabel, dropdown, mdmDataTable
			]
		});
	}

});