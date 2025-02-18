
__________Architecture Back-End_____________

Route: Folder to containe all Route use for applilcation
Models: Folder to containe all models of data
middleware: folder to create Auth of users
controllers: Folder to create register and login or more file to send in database
Db: Folder to containe file db.ts to create database
schema: Folder to containe all schema file of data



# Initialisation d'un projet npm
npm init -y

# Installer TypeScript et les dépendances nécessaires
npm install typescript @types/node ts-node nodemon --save-dev

# Initialiser la configuration TypeScript
npx tsc --init

# Créer la structure de base du projet
mkdir src
mkdir src/controllers
mkdir src/models
mkdir src/routes
mkdir src/config
mkdir src/middleware
mkdir src/types

# Créer les fichiers de base
touch src/app.ts
touch src/server.ts
touch .env
touch .gitignore

dépendances à utilisé 
npm install express mongoose jsonwebtoken bcrypt 
body-parser cors dotenv cookie-parser

pour typescript
npm install --save-dev @types/express @types/jsonwebtoken @types/bcrypt 
@types/body-parser @types/cors @types/cookie-parser @types/mongoose