import mongoose from "mongoose";
import { ContactSchema } from "../models/crmModel";

const Contact = mongoose.model('Contact', ContactSchema);

export const addNewContact = async (req, res) => {
    let newContact = new Contact(req.body);

    try {
        let newContact = new Contact(req.body);
        const savedContact = await newContact.save();
        res.json(savedContact);
    } catch (err) {
        res.send(err);
    }
}

export const getContacts = async (req, res) => {

    try {
        const contacts = await Contact.find({}).exec();
        res.json(contacts);
    } catch (err) {
        res.send(err);
    }

}