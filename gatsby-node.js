"use-strict";
const path = require("path");

exports.createPages = async ({ actions }) => {
	const { createPage } = actions;

	const subscriptionConfirmationComponent = path.resolve("src/templates/traverse/subscription-confirmation.js");

	createPage({
		path: "/traverse/subscription-confirmation",
		component: subscriptionConfirmationComponent,
	});
};
