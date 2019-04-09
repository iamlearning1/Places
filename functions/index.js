const functions = require("firebase-functions");
const cors = require("cors")({
  origin: true
});
const fs = require("fs");
const uuidv4 = require("uuid-v4");
const gcconfig = {
  projectId: "awesome-places-1dbec",
  keyFilename: "awesome-places-firebase-adminsdk.json"
};
const storage = require("@google-cloud/storage")(gcconfig);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.storeImage = functions.https.onRequest((request, response) => {
  return cors(request, response, () => {
    const body = JSON.parse(request.body);

    fs.writeFileSync("/tmp/uploaded-image.jpg", body.image, "base64", err => {
      return response.status(500).json({ error: err });
    });

    const bucket = storage.bucket("awesome-places-1dbec.appspot.com");
    const uuid = uuidv4();

    return bucket.upload(
      "/tmp/uploaded-image.jpg",
      {
        uploadType: "media",
        destination: "/places/" + uuid + ".jpg",
        metadata: {
          metadata: {
            contentType: "image/jpeg",
            firebaseStorageDownloadTokens: uuid,
            resumable: false
          }
        }
      },
      (err, file) => {
        if (!err) {
          return response.status(201).json({
            imageUrl:
              "https://firebasestorage.googleapis.com/v0/b/" +
              bucket.name +
              "/o/" +
              encodeURIComponent(file.name) +
              "?alt=media&token=" +
              uuid
          });
        } else {
          return response.status(500).json({ error: err });
        }
      }
    );
  });
});
