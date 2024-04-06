import mongoose from "mongoose";

const AdditionalInfoSchema= new mongoose.Schema({
    businessName: String,
    uniqueEntityNumber: String,
    sector: String,
    subSector: String,
    yrsInOperation: String,
    numberOfEmployees: String,
    annualSalesTurnover: String,
    percentageOfSingapore_PR_owned: String,
    registered_in_sg: String,
    GST_registered_business: String,
}, { timestamps: true });

const AdditionalInfo = mongoose.model	("additionalInfo", AdditionalInfoSchema);

export default AdditionalInfo;