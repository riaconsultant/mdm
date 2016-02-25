jQuery.sap.require("com.mdm.Component");

sap.ui.core.UIComponent.extend("com.mdm.Component",{
	
	metadata:{
		
		routing : {
			config : {
				viewType : "JS",
				viewPath : "mdm",
				targetControl :"navContainer",
				targetAggregation :"pages",
				clearTarget:false
			},
				routes : [
							{
								pattern:"",
								name:"dataManagement",
								view:"dataManagement"
							},
							{
							pattern: "secondPage/{id}",
							name: "secondPage",
							view:"secondPage"
						}
							]

		}
	}
});

com.mdm.Component.prototype.init = function(){
	
	jQuery.sap.require("sap.ui.core.routing.History");
	jQuery.sap.require("sap.m.routing.RouteMatchedHandler");
	
	sap.ui.core.UIComponent.prototype.init.apply(this);
	
	var router = this.getRouter();
	this.routeHandler = new sap.m.routing.RouteMatchedHandler(router);
	router.initialize();
	
};

com.mdm.Component.prototype.destroy = function(){
	if(this.routeHandler){
		this.routeHandler.destroy(); 
	}
	
	sap.ui.core.UIComponent.destroy.apply(this,arguments);
	
};

com.mdm.Component.prototype.createContent = function(){
	this.view = sap.ui.view({id:"app",viewName:"mdm.App",type:sap.ui.core.mvc.ViewType.JS});
	return this.view;
};