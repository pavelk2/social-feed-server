# Social Feed Server

## Running

Install dependencies with `npm install`.  
Run app with `npm start`.


## Deployment on Heroku
bash```
heroku login
heroku create

heroku config:set INSTAGRAM_CLIENT_ID=YOUR_CLIENT_ID

git push heroku master
heroku open
```