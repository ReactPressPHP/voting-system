import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const verifyMember = async (req, res) => {
  const id = req.params.id;

  if (!id) {
    return res.status(400).json({
      message: "Missing parameter :id"
    });
  }

  let is_member = false;
  const filePath = path.join(__dirname, '../Database/members.json');
  
  try {

    const fileData = await fs.promises.readFile(filePath, 'utf8');
    const jsonData = JSON.parse(fileData);

    if (jsonData.includes(id)) {
      is_member = true;
    }

    return res.status(200).json({
      is_member
    });

  } catch (error) {

    console.log(`Error: ${error}`);

    return res.status(400).json({
      message: "Something went wrong. Try again"
    });
    
  }
  
}