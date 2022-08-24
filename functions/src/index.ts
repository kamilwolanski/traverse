const functions = require("firebase-functions");
const axios = require("axios");
const cors = require("cors")({ origin: true });

const addTagToContact = async (contactId: string, tagId: string) => {
	try {
		await axios({
			method: "post",
			url: "https://gamerhash.api-us1.com/api/3/contactTags",
			headers: {
				"Api-Token": "399be13fd9ba0794f0171986451eaa25b352c426c73f773241107ddb564194845dfff1f0",
			},
			data: {
				contactTag: {
					contact: contactId,
					tag: tagId,
				},
			},
		});
	} catch (e) {
		console.error(e);
	}
};

export const createNewContact = functions.https.onRequest((request: { body: any; }, response: { status: (arg0: number) => void; send: (arg0: { response?: unknown; status?: string; }) => void; }) => {
	cors(request, response, async () => {
		const newContactData = request.body;
		if(!newContactData.email || !newContactData.fieldValues) {
			return response.send({
				response: 'No contact data provided'
			})
		} 

		try {
			const responseActiveCampaign = await axios({
				method: "post",
				url: "https://gamerhash.api-us1.com/api/3/contacts",
				headers: {
					"Api-Token": "399be13fd9ba0794f0171986451eaa25b352c426c73f773241107ddb564194845dfff1f0",
					"Content-Type": "application/json"
				},
				data: {
					contact: newContactData,
				},
			});
			console.log('response active campaign console log', responseActiveCampaign)
			await addTagToContact(responseActiveCampaign.data.contact.id, "1")
			return response.send({
				response: responseActiveCampaign.data
			})
		} catch (error) {
			console.log('catch error', error);
			response.status(500);
			return response.send({
				response: error.response.data,
				status: error.response.status
			});
		}

	});
});
