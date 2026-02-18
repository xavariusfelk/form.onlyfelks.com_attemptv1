# Quick how to aka DOCS
In case I'll forget how to set it up

### .env setup

1. Rename .env.example to .env
2. Edit the params inside .env
    * PORT will be port that site will be running on, so if you set it to lets say 8080, website will work on 8080
        It's there so you can change it in case you already have something working on default PORT 3000.
    * JSON_FILE will be a place where json file will be placed when data will be submitted.
        It's job is to place it somewhere, where it can be accessed by the app to add extra data

Example .env file should look like this

```
PORT=8080
JSON_FILE=form_data/responses.json
```

Example structure of responses.json can be found in [`/data/example.json`](https://github.com/xavariusfelk/form.onlyfelks.com_attemptv1/blob/main/data/example.json)

### How to run app

Steps below assume you're running it on Windows, macOS or Linux operating system with `node.js` and `npm` already installed.
If you don't have node.js or npm installed, please refer to the docs of either to install them.

1. Run `npm install` to install all dependencies that you can find in package.json
2. Run `npm start` to start the app
If everything was successful your terminal should show
```
Server running at http://localhost:PORT
```

### API calls
This doesn't do a lot of API calls to the backend as all that is submitted are two text inputs from user alongside of timestamp as I couldn't be bother to make it more complex.

#### /api/submit
Below you'll find what is submitted. You can also check source code of form submit script [here](https://github.com/xavariusfelk/form.onlyfelks.com_attemptv1/blob/main/assets/form.js)
```
{
    "name": "",
    "question": ""
}
```


If something doesn't work then make an Issue on GitHub.
If you want to contribute to this... _thing_ feel free to, I don't bite.