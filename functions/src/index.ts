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
          url: "https://kwolanski3.api-us1.com/api/3/contacts",
          headers: {
            "Api-Token":
              "2ecc01a30cb6510074b041d3b9d56db2f3d28a15df46bdf4dcb210092da1a2cd6cab82f2"
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
