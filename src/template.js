"use strict";

const fs = require('fs');
const handlebars = require('handlebars');

const templateFileLocation = './src/template.handlebars';

module.exports.renderTemplate = (options) => {
	const rawTemplate = fs.readFileSync(templateFileLocation, {
		encoding: 'utf8',
		flag: 'r'
	});

	const compiledTemplate = handlebars.compile(rawTemplate);

	return compiledTemplate(options);
};
