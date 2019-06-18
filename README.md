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

!important -> Update the ```package.json```

The package.json is still in a default state that has to be adapted to your actual project. The data that will have to be updated is:

* name
* description
* repository url
* author
* bugtracker url
* homepage

> If this is not done then the publishing to _npmjs.org_ will fail

## Structure

