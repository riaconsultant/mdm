sap.ui.controller("mdm.secondPage", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf mdm.secondPage
*/
	onInit: function() {
		var dropdwnModel = new sap.ui.model.json.JSONModel();
		var url = "util/structure.json";
		dropdwnModel.loadData(url, null, false);
		sap.ui.getCore().setModel(dropdwnModel);
		var dropdownFld = sap.ui.getCore().byId("dropdownSelectedId");
		dropdownFld.setModel(dropdwnModel);
		var router = sap.ui.core.UIComponent.getRouterFor(this);
		router.getRoute("secondPage").attachPatternMatched(this._routePatternMatched, this);
	},
	_routePatternMatched: function(oEvent) {
		var sId = oEvent.getParameter("arguments").id;
		this.fetchTableData(sId);

	},
	fetchTableData : function(sId){
		var oTable = sap.ui.getCore().byId("mdmDataTable");
		oTable.removeAllColumns()
		var oModelData = sap.ui.getCore().getModel().getData();
		var pathCol =  "oModelData." +sId+ "_Col";
		var pathRow = "oModelData." +sId+ "_Row";
		var aColumnData = eval(pathCol);
		var aRowData = eval(pathRow);
		//for(key in pathCol.col) {
		for(i=0; length=aColumnData.length, i<length; i++){
			oTable.addColumn(new sap.ui.table.Column({
				label : aColumnData[i],
				template: new sap.ui.commons.TextView().bindProperty("text", aRowData[i])
			})); 

		}
		//    };
		oTable.setModel(sap.ui.getCore().getModel());
		var rowPath = "/"+sId;
		oTable.bindRows(rowPath);
		sap.ui.getCore().byId("dropdownSelectedId").setSelectedKey(sId);
	},
/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf mdm.secondPage
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf mdm.secondPage
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf mdm.secondPage
*/
//	onExit: function() {
//
//	}
	selectValueFromDrpDwn : function(oEvent){
		var dataModel = sap.ui.getCore().getModel().getData();
		var selectedVal = oEvent.getParameters().selectedItem.getProperty("key");
		this.fetchTableData(selectedVal);
		var router = sap.ui.core.UIComponent.getRouterFor(this);
		router.navTo("secondPage",{id: selectedVal}, dataModel, false);
	},
	
	addDataInTable : function(oEvent){},
	updateDataInTable : function(oEvent){},
	deleteDataInTable : function(oEvent){}
});