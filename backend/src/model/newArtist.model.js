import mongoose from "mongoose";

const newArtistSchema = new mongoose.Schema(
{
    artist: { type: String, required: true },
    email: { type: String, required: true },
    gender: { type: String, required: true },
    appleMusic: { type: String, required: true },
    spotify: { type: String , required: true},
    label: { type: String, required: true },
},
{
    timestamps: true,
}
);

const newArtist = mongoose.model("newArtist", newArtistSchema);
export default newArtist;
