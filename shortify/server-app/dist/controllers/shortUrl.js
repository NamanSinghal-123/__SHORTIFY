import { urlModel } from "../model/shortUrl.js";
export const CreateUrl = async (req, res) => {
    try {
        console.log("The fullUrl is ", req.body.fullUrl);
        const urlFound = await urlModel.find({ fullUrl: req.body.fullUrl });
        if (urlFound.length > 0) {
            res.status(409);
            res.send(urlFound);
        }
        else {
            const shortUrl = await urlModel.create({ fullUrl: req.body.fullUrl });
            res.status(201).send(shortUrl);
        }
    }
    catch (error) {
        res.status(500).send({ message: "Something went wrong" });
    }
};
export const getAllUrl = async (req, res) => {
    try {
        const shortUrl = await urlModel.find();
        if (shortUrl.length < 0) {
            res.status(404).send({ message: "short Urls not found!" });
        }
        else {
            res.status(200).send(shortUrl);
        }
    }
    catch (error) {
        res.status(500).send({ message: "Something went wrong" });
    }
};
export const getUrl = async (req, res) => { };
export const deleteUrl = async (req, res) => { };
