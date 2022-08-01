import * as functions from "firebase-functions";
const axios = require("axios");
const cors = require("cors")({ origin: true });

export const createNewContact = functions.https.onRequest(
  (request, response) => {
    cors(request, response, async () => {
        const newContactData = request.body;

      try {
        await axios({
          method: "POST",
          url: "https://gamerhash.api-us1.com/api/3/contacts",
          headers: {
            "Api-Token":
              "399be13fd9ba0794f0171986451eaa25b352c426c73f773241107ddb564194845dfff1f0"
          },
          data: {
            contact: newContactData
          }
        });
      } catch (e) {
        console.error(e);
        response.status(500);
        response.send({
          response: e
        });
      }

      functions.logger.info("Hello logs!", { structuredData: true });
      response.send({ status: "ok" });
    });
  }
);
