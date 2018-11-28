({
    onInit : function(component, event, helper) 
    {
        debugger;
        
        var action = component.get("c.getCustomerList");
        
           //component.set('v.sobject', 'lead');   // DELETE ME
        
        var sobject = component.get("v.sobject");
        
        action.setParams({
            sObjectType : sobject
        });
        
        action.setCallback(this, function(response){
            component.set("v.itemsList", response.getReturnValue());
            console.log(component.get("v.itemsList"));
        });
        
        $A.enqueueAction(action);
        
        helper.setBadge(component, helper);
    }
})