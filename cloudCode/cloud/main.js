/* global Parse,console,require */

var Mailgun = require('mailgun');
Mailgun.initialize('nychesscastle.com', 'key-5jpm-0p-4khubohofqycke6nxo681xt1');

Parse.Cloud.beforeSave("ContactObject", function(request, response) {
	var text = "Contact Form Email\n" +
		"From: " + request.object.get("name") + "\n" +
		"Email: " + request.object.get("email") + "\n" +
		"Comments: " + request.object.get("comments");

	Mailgun.sendEmail({
		to: "admin@nychesscastle.com",
		from: request.object.get("email"),
		subject: "Contact Form",
		text: text
	}, {
		success: function(httpResponse) {
			response.success();
		},
		error: function(httpResponse) {
			console.log(httpResponse);
			response.error('Mailing contact form failed');
		}
	});	
});
