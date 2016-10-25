# Easy certificate download

Simple website to host downloadable certificates, created using **InDesign Data Merge Tool**, [CSVtoJSON](http://www.convertcsv.com/csv-to-json.htm), and Knockout JS.

## Getting started

### Required files:
* Certificates files. (If you have a database you can create them with **InDesign Data Merge Tool** and this [awesome script.](https://colecandoo.com/2015/09/04/data-merge-from-indesign-to-unique-filenames-now-a-reality/))
* JSON file with certificate names. (You should create it from the same database)

**The certificate filename should be the same as the name that will be rendered, taken from the JSON file:**

Filename: `MATEO BUITRAGO.pdf`
JSON: `{
	name: MATEO BUITRAGO
}`

### Steps

1. Upload certificate files and JSON file to the certificate folder.
2. Link JSON file in the HTML
3. Done!
