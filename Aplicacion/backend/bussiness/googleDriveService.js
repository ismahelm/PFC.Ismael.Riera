import fs from 'fs';
import { google } from 'googleapis';
import path from 'path';
import dotenv from "dotenv"
dotenv.config();


const folderId = process.env.DRIVE_FOLDER_ID
const KEYFILEPATH = './swift-rite-444500-i2-9c851f98c099.json'; // tu clave descargada
const SCOPES = ['https://www.googleapis.com/auth/drive.file'];

const auth = new google.auth.GoogleAuth({
  keyFile: KEYFILEPATH,
  scopes: SCOPES,
});

export const uploadPdfToDrive = async (pdfPath, fileName) => {
  const driveService = google.drive({ version: 'v3', auth });

  const fileMetadata = {
    name: fileName,
    parents: [folderId], 
  };

  const media = {
    mimeType: 'application/pdf',
    body: fs.createReadStream(pdfPath),
  };

  const file = await driveService.files.create({
    resource: fileMetadata,
    media,
    fields: 'id, webViewLink, webContentLink',
  });

  return file.data; // contiene id, links, etc.
};
