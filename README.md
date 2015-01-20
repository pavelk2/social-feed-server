# Social Feed Server

## Running

Install dependencies with `npm install`.  
Run app with `npm start`.


## Deployment on Heroku
bash```
heroku login
heroku create
# if you decided to rename your app in heroku:
git remote set-url heroku https://git.heroku.com/NEW_NAME_OF_YOUR_APP.git

heroku config:set INSTAGRAM_CLIENT_ID=YOUR_CLIENT_ID

git push heroku master
heroku open
```