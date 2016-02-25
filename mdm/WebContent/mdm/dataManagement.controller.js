sap.ui.controller("mdm.dataManagement", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf mdm.dataManagement
*/
	onInit: function() {
		var dropdwnModel = new sap.ui.model.json.JSONModel();
		var url = "util/structure.json";
		dropdwnModel.loadData(url, null, false);
		sap.ui.getCore().setModel(dropdwnModel);
		var dropdownFld = sap.ui.getCore().byId("dropdownId");
		dropdownFld.setModel(dropdwnModel);

	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf mdm.dataManagement
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf mdm.dataManagement
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf mdm.dataManagement
*/
//	onExit: function() {
//
//	}
	
	selectValueFromDrpDwn : function(oEvent){
		var dataModel = sap.ui.getCore().getModel().getData();
		var selectedVal = oEvent.getParameters().selectedItem.getProperty("key");
		var router = sap.ui.core.UIComponent.getRouterFor(this);
		router.navTo("secondPage",{id: selectedVal}, dataModel, false);
	}

});