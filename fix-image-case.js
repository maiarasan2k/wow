// fix-image-case.js
import fs from "fs";
import path from "path";

const imagesDir = path.join(process.cwd(), "public", "images");

// Code la irukkura image list
const pictures = [
  "DSC00680",
  "DSC00933",
  "DSC00966",
  "DSC00983",
  "DSC00993",
  "DSC01011",
  "DSC01040",
  "DSC01064",
  "DSC01071",
  "DSC01103",
  "DSC01145",
  "DSC01420",
  "DSC01461",
  "DSC01489",
  "DSC02031",
  "DSC02064",
  "DSC02069",
  "book-cover",
  "book-back"
];

const files = fs.readdirSync(imagesDir);

pictures.forEach(name => {
  const correctName = name + ".jpeg";
  const found = files.find(f => f.toLowerCase() === correctName.toLowerCase());
  if (found && found !== correctName) {
    fs.renameSync(path.join(imagesDir, found), path.join(imagesDir, correctName));
    console.log(`♻️ Renamed: ${found} → ${correctName}`);
  }
});
