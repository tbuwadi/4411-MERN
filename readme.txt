***** HEROKU
git init
git add .
git commit -m "commit"

heroku create

git push heroku master

test

*** GOOGLE CLOUD

- build the client folder before pushing: 
cd client
yarn build

- deploy new version to google CLOUD
open windows terminal
cd client
gcloud app deploy 
cd ..
gcloud app deploy
gcloud app browse (to see the webapp)
