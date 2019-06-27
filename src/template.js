"use strict";

const fs = require('fs');
const handlebars = require('handlebars');

const templateFileLocation = './src/template.handlebars';

module.exports.renderTemplate = (options) => {
	const compiledTemplate = handlebars.compile(template);

	return compiledTemplate(options);
};

const template =
`This is your handlebars template
`;
