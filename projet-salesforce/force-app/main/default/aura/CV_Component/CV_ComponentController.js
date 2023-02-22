({
    doInit: function(component, event, helper) {
        var sObjectName = component.get("v.sObjectName");
        var fieldList = component.get("v.fieldList");
 
        var action = component.get("c.getFieldDescriptions");
        action.setParams({ sObjectName : sObjectName, fieldList : fieldList });
 
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                var fieldDescriptions = response.getReturnValue();
                component.set("v.fieldList", fieldDescriptions);
            }
            else {
                console.log("Error fetching field descriptions: " + state);
            }
        });
        $A.enqueueAction(action);
    },
 
    handleSubmit: function(component, event, helper) {
        event.preventDefault();
        var newRecord = component.get("v.newRecord");
        var sObjectName = component.get("v.sObjectName");
 
        var action = component.get("c.createRecord");
        action.setParams({ sObjectName : sObjectName, newRecord : newRecord });
 
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                var recordId = response.getReturnValue();
                helper.showToast("Success!", "Record created: " + recordId, "success");
                var navEvt = $A.get("e.force:navigateToSObject");
                navEvt.setParams({
                    "recordId": recordId,
                    "slideDevName": "related"
                });
                navEvt.fire();
            }
            else {
                console.log("Error creating record: " + state);
                var errors = response.getError();
                var message = "Unknown error";
                if (errors && Array.isArray(errors) && errors.length > 0) {
                    message = errors[0].message;
                }
                helper.showToast("Error!", message, "error");
            }
        });
        $A.enqueueAction(action);
    }
})