public class CustomObjectFormController {

    public CV__c cv { get; set; }
    public Map<String, Schema.SObjectField> fieldMap { get; set; }
    public List<String> fieldNames { get; set; }
    
    public CustomObjectFormController() {
        // Initialise l'objet personnalisé et le map des champs
        cv = new CV__c();
        fieldMap = Schema.SObjectType.CV__c.fields.getMap();
        fieldNames = new List<String>(fieldMap.keySet());
    }
	
    public List<SelectOption> getFieldDescriptions() {
        // Renvoie une liste de SelectOption pour les champs de l'objet personnalisé
        List<SelectOption> options = new List<SelectOption>();
        for (String fieldName : fieldNames) {
            options.add(new SelectOption(fieldName, fieldMap.get(fieldName).getDescribe().getLabel()));
        }
        return options;
    }

    public PageReference save() {
        // Enregistre le nouvel enregistrement de l'objet personnalisé
        try {
            insert cv;
        } catch (Exception e) {
            ApexPages.addMessages(e);
            return null;
        }
        // Redirige vers la page d'accueil de l'objet personnalisé
        PageReference pageRef = new ApexPages.StandardController(cv).view();
        pageRef.setRedirect(true);
        return pageRef;
    }

}