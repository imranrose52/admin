import { CustomErrorHandler, JwtService } from "../../services";
import Joi from "joi";
import { Loader_user_model } from "../../models";
import { loader_kyc_uploder, loader_profile_uploder } from "../../utils";
import multer from "multer";
import fs from "fs";

const loginController = {
  async profile(req, res, next) {
    loader_profile_uploder(req, res, async (err) => {
      if (err instanceof multer.MulterError) {
        // A Multer error occurred when uploading.
        console.log(err);
      } else if (err) {
        console.log(err);
      }

      const uploaded_profile = req.file.filename;
      console.log("uploaded profile", uploaded_profile);
      // console.log(appRoot);

      /* # find and store previus picture before updating new one  
      for delete after new one uploaded ( clear memory)
      
      */
      const { profile_pic } = await Loader_user_model.findById(req.user._id);
      const previus_photo = profile_pic;

      //## -------------------------------------------------------------------

      // -------------------------------------------------------------------
      const loader = await Loader_user_model.findByIdAndUpdate(
        { _id: req.user._id },
        { profile_pic: uploaded_profile }
      );

      console.log(loader);

      if (!loader) {
        console.log("eroor ", loader);
        return next(CustomErrorHandler.sometingWorng());
      }

      // ## delete previus photo (clear memory)----------------------------------
      if (previus_photo) {
        fs.unlink(
          `backend\\public\\uploads\\users\\loaders\\profiles\\${previus_photo}`,
          (err) => {
            return next(err);
          }
        );
      }
      // ----------------------------------------------------------------------

      res.status(201).json({ success: true, path: uploaded_profile });
    });
  },

  async idProof(req, res, next) {
    loader_kyc_uploder(req, res, async (err) => {
      if (err instanceof multer.MulterError) {
        // A Multer error occurred when uploading.
        // console.log(err);
      } else if (err) {
        // console.log(err);
      }

      const uploaded_id_proof = req.file.filename;
      // console.log(uploaded_id_proof);
      // ----------------------------------------------------------------------------

      /* # find and store previus picture before updating new one  
      for delete after new one uploaded ( clear memory)
      --------------------------------------------------------------------------------
      
      */
      const { documents } = await Loader_user_model.findById(req.user._id);
      const previus_doc = documents.id_proof;
      // console.log("previus photo", previus_doc);

      //## -------------------------------------------------------------------

      const loader = await Loader_user_model.findByIdAndUpdate(
        { _id: req.user._id },
        { "documents.id_proof": uploaded_id_proof }
      );

      if (!loader) {
        return next(CustomErrorHandler.sometingWorng());
      }
      // ## delete previus photo (clear memory)----------------------------------
      if (previus_doc) {
        fs.unlink(
          `backend\\public\\uploads\\users\\loaders\\kyc_document\\${previus_doc}`,
          (err) => {
            return next(err);
          }
        );
      }
      // ----------------------------------------------------------------------

      res.status(201).json({ success: true, path: uploaded_id_proof });
    });
  },

  async adressProof(req, res, next) {
    loader_kyc_uploder(req, res, async (err) => {
      if (err instanceof multer.MulterError) {
        // A Multer error occurred when uploading.
        // console.log(err);
      } else if (err) {
        // console.log(err);
      }

      const uploaded_address_proof = req.file.filename;
      // console.log(uploaded_address_proof);

      /* # find and store previus picture before updating new one  
      for delete after new one uploaded ( clear memory)
      --------------------------------------------------------------------------------
      
      */
      const { documents } = await Loader_user_model.findById(req.user._id);
      const previus_doc = documents.address_proof;
      // console.log("previus photo", previus_doc);

      //## -------------------------------------------------------------------

      const loader = await Loader_user_model.findByIdAndUpdate(
        { _id: req.user._id },
        { "documents.address_proof": uploaded_address_proof }
      );

      if (!loader) {
        return next(CustomErrorHandler.sometingWorng());
      }

      // ## delete previus photo (clear memory)----------------------------------
      if (previus_doc) {
        fs.unlink(
          `backend\\public\\uploads\\users\\loaders\\kyc_document\\${previus_doc}`,
          (err) => {
            return next(err);
          }
        );
      }
      // ----------------------------------------------------------------------
      res.status(201).json({ success: true, path: uploaded_address_proof });
    });
  },
};

export default loginController;
