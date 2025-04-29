import { uploadPdfToDrive } from "../bussiness/googleDriveService.js";

const pdfPath = './test.pdf';
const fileName = 'Certificado_JuanPerez.pdf';

export const uploadPDF = async(req,res)=>
{
 try {
    const newPDF = await uploadPdfToDrive(pdfPath, fileName);
    res.status(200).json({ message: "succes" });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
