"use strict";

const chai = require('chai');
const expect = chai.expect;

const template = require('./template');

describe('template', () => {
	it('Should render template correct', () => {
		const renderedTemplate = template.renderTemplate({});

		expect(renderedTemplate).to.have.string('This is your handlebars template');
	});
});
