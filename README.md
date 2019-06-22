🔎 looking for the ```ttouch``` repository -> [ttouch](https://github.com/dejanfajfar/ttouch)

---

![Gitter](https://img.shields.io/gitter/room/dfajfar/ttouch.svg)

![Logo](https://raw.githubusercontent.com/dejanfajfar/ttouch/master/misc/template_header_image.jpg)

# ttouch template template

> Seed project for a new ttouch template

In order to create new templates to use with the ttouch tool it is easier to start from a preexisting scafold and not having to create the complete project from scratch. 

This is this scafold

## Create new template

```bash
$ npx degit dejanfajfar/tttemplate ttt-new
```

This will put the required scaffolding into the *ttt-new* folder

Install the dependencies

```bash
$ npm install
```

‼️ important -> Update the ```package.json```‼ ️

```degit``` is a good tool but it still lacks the capability to manipulate the _cloned_ files once on the target system. This is why some data has to updated before you start. The data that will have to be updated is:
* name
* description
* repository url
* author
* bugtracker url
* homepage

> If this is not done then the publishing to _npmjs.org_ will fail

### Naming your template

The name directory where your template lives has really no merit on the published name of the template package. In order for your template to work with ```ttouch``` please name it using the following template:

*@ttouch/{template-name}*

### The template render function

Before you start work on your own generator I have to bring this one important point across. Regardless of what you do in essence

> The only thing that the template has to do is to return a string!

So all you really have to implement is:

```javascript
module.exports = () => {
	return "";
}
```

This will create an empty file. Nice bot we can do better...

For more _complex_ behavior you can use the provided options object.

```javascript
module.exports = options => {
	let template = '';
	...
	// do something with options
	...
	return template;
}
```

### The options object

The option object passed to your render function contains some basic information. 

This information includes:

* absolutePath -> The absolute path, containing file name and extension, to the file being created
* fileName -> The file name and extension
* template -> The template name, not extended with *@ttouch/* part

#### Sample 

Calling ttouch with 

```bash
/home/me $ ttouch test.file -t sh
```

Would produce the following options object

```bash
{
	absolutePath: "/home/me/test.file",
	fileName: "test.file",
	template: "sh"
}
```

## Structure

```
.
|-- src
|   |-- template.template
|   |-- template.js
|   `-- template.spec.js
|
|-- .editorconfig
|-- .gitignore
|-- .mocharc.yml
|-- index.js
|-- LICENSE
|-- package-lock.json
|-- package.json
`-- README.md
```
 
Starting at the bottom with the _infrastructure_ files we have:

* README.md -> The readme file that you should customize to tell your story
* package*.json -> The _package_ file. Do not forget to fill in the blanks of the package.json file
* LICENSE -> The license of the template. Currently it is the Apache 2.0 license but you can change it if you want. But if you do do not forget the package.json to.
* .mocharc.yml -> Mocha configuration file
* .gitignore -> The gitignore file. Should cover the most common ignored files
* .editorconfig -> Contains common editor configuration settings. Change or ignore at your own leisure
* index.js -> Template entry point. Must export the template function. Under normal circumstances you will mostly not have to touch it
* src/template.template -> The [handlebars](https://handlebarsjs.com/) file template.
* src/template.js -> Main logic file where the template gets _rendered_ and returned to the calling application
* src/template.spec.js -> The mocha unit test for the template.

### The replacement README.md

The readme is quite important so I would like to provide a stub README.md file. This file is the **README.stub.md**.

To replace the contained README.md without loosing it I would suggest to:

```bash
$ mv README.md README.bak.md && cp README.stub.md README.md
```

