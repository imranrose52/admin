import multer from "multer";

import path from "path";

const storage = multer.diskStorage({
  destination: (req, file, cb) =>
    cb(null, "backend/public/uploads/users/loaders/kyc_document"),
  filename: (req, file, cb) => {
    const uniquieName = `${Date.now()}-${Math.round(
      Math.random() * 1e9
    )}${path.extname(file.originalname)}`;

    cb(null, uniquieName);
  },
});

export default multer({
  storage,
  limits: { fileSize: 1000000 * 5 } /*  = 5mb */,
}).single("doc"); /* multipart data from field name */
