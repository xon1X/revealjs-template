# RevealJS Presentation template

This is a little reveal-js presentation containing slides and features I often use for presentations.


## Show me the presentation

```bash
docker build -t my-presentation-image .
docker run -it -p 80:80 my-presentation-image
```


## Start developing

(make sure nodejs is installed)  

```bash
npm install
npm start
```
This starts a development server with hot-reload (reload website on save) enabled.  
Have fun!

### Where to put slides?

You can put every slide (`<section></section>`) inside the `index.html` file.  
You can also create another html file and reference it inside `index.html`:
```html
<section data-external-replace="slides/1_agenda.html"></section>
```


### changing slide info (top + bottom left)

1. Open `js/titleChanger.js`
2. Adjust `pageTitle` and `footerName` to match your preferences.  
You can also do this per page (like in this example).  
You'll find the current slide id at the end the URL of the presenations website


## Get a pdf file of your presentation

Note: This currently works only on chromium-based browsers.

1. Append `?print-pdf` to the presentations URL (but remove any '#').
2. Press `ctrl` + `p` to open the print dialog.
3. Choose `save as pdf`  
