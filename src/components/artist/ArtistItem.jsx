import React, { useState } from "react";
import { Grid, Typography } from "@material-ui/core";
import ArtistProfileModal from "./ArtistProfileModal";

const AristItem = ({ artist }) => {
  const [openModal, setOpenModal] = useState(false);
  const { name, imageUrl } = artist;
  return (
    <Grid item xs={12} md={3} className="artist-items">
      <div className="artist-image" onClick={() => setOpenModal(true)}>
        <img src={imageUrl} alt="" />
        <div className="artist-name">
          <Typography>{name}</Typography>
        </div>
      </div>
      {openModal && (
        <ArtistProfileModal
          open={openModal}
          handleClose={() => setOpenModal(false)}
          artist={artist}
        />
      )}
    </Grid>
  );
};

export default AristItem;
