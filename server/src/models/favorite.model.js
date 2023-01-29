import moongose, { Schema } from "mongoose";
import modelOptions from "./model.option";

export default moongose.model(
  "Favorite",
  moongose.schema(
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        require: true,
      },
      mediaType: {
        type: String,
        enum: ["tv", "movie"],
        require: true,
      },
      mediaId: {
        type: String,
        require: true,
      },
      mediaTitle: {
        type: String,
        require: true,
      },
      mediaPoster: {
        type: String,
        require: true,
      },
      mediaRate: {
        type: Number,
        require: true,
      },
    },
    modelOptions
  )
);
