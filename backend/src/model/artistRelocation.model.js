// artistRelocation.model.js
import mongoose from "mongoose";

const artistRelocationSchema = new mongoose.Schema(
{
    upc: { type: String, required: true },
    title: { type: String, required: true },
    artist: { type: String, required: true },
    isrc: { type: String, required: true },
    instaLink: { type: String, required: true },
    fbLink: { type: String, required: true },
    label: { type: String, required: true },
},
{
    timestamps: true,
}
);

const ArtistRelocation = mongoose.model("ArtistRelocation", artistRelocationSchema);
export default ArtistRelocation;
