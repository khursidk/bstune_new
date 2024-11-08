import mongoose from "mongoose";

const songSchema = new mongoose.Schema(
    {
    label: { type: String, required: true },
    title: { type: String, required: true },
    artist: { type: String, required: true },
    releaseType: { type: String, required: true },
    primaryGenre: { type: String, required: true },
    subGenre: { type: String, required: true },
    cLine: { type: String, required: true },
    pLine: { type: String, required: true },
    language: { type: String, required: true },
    saleStartDate: { type: String, required: true },
    producer: { type: String, required: true },
    composer: { type: String, required: true },
    lyricist: { type: String, required: true },
    poster: { type: String, required: true },
    audio: { type: String, required: true },
    callerTuneDuration: { type: String, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    },
    {
    timestamps: true,
    }
);

const Song = mongoose.model("Songs", songSchema);
export default Song;
