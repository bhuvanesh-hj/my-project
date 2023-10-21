import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect(
      "mongodb+srv://bhuvaneshhj:GMVOZTmT471wS0kR@cluster0.fghogsf.mongodb.net/meetups?retryWrites=true&w=majority"
    );

    const db = client.db();

    const meetupsCollection = db.collection("meetups");

    const result = await meetupsCollection.insertOne(data);

    client.close();

    // 201 indicates that the one item inserted sucessfully
    res.status(201).json({ message: "Mettup inserted" });
  }
}

export default handler;
