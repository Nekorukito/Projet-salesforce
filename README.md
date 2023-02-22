# Projet-salesforce

## Description du projet

Lorem ipsum

## Installation

**Important** \
Utiliser la branche **dev** pour le projet. La branche **main** sera utilisée pour ce qui est fini et fonctionnel.

### Récupération du projet

```sh
# Pour récupérer le projet
git clone https://github.com/Nekorukito/Projet-salesforce.git
```

Si on est sur la branche *main*, utiliser la commande :

```sh
git switch dev
```

### Mise en place sur VSCode

Il faut dans un premier temps installer ***Salesforce CLI*** disponible sur le lien suivant : https://developer.salesforce.com/tools/sfdxcli#

Pour Martin, le paquet c'est ***sfdx-cli***.

Pour vérifier l'installation :

```sh
sfdx update
```

Sur VSCode, il faut télécharger l'extension ***Salesforce Extension Pack***.

## Utilisation

### Pour le développement
Une fois installé et le projet récupéré. Il y a plusieurs commandes importantes:

***IMPORTANT*** : faire la première commande avant de programmer, sinon on sera pas a jour avec le code présent et ça peut causer des problèmes
```
# Pour récupéréer le code du site
SFDX : Retrieve this source from org

# Pour envoyer le code vers le site
SFDX : Deploy this source to org 
```

Pour les utiliser, soit clic droit ou alors Ctrl + Shift + P et tu tappes la commande.

### Pour le git

```sh
# Avant de retravailler, afin d'avoir le projet a jour du dépot
git pull

# Pour envoyer son code
git add <les fichiers>
git commit -m "commentaire"
git push origin dev
```
