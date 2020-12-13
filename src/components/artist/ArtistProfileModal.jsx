import React from "react";
import {
  Grid,
  Modal,
  Backdrop,
  Fade,
  Typography,
  Tooltip
} from "@material-ui/core";

const ArtistProfileModal = ({ open, handleClose, artist }) => {
  const {
    name,
    imageUrl,
    artworks,
    nationality,
    years,
    formatted_artworks_count
  } = artist;
  return (
    <Modal
      className="artist-profile-modal"
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500
      }}
    >
      <Fade in={open}>
        <>
          <Grid container className="artist-profile-header" alignItems="center">
            <Grid item xs={12} md={4} align="center">
              <img src={imageUrl} alt={`artist-${name}-profile`} />
            </Grid>
            <Grid item xs={12} md={8}>
              <Typography className="artist-profile-name">{name}</Typography>
              <Typography className="artist-info">
                Nationality: {nationality}
              </Typography>
              <Typography className="artist-info">
                Birthdate: {years}
              </Typography>
              <Typography className="artist-info">
                Artworks: {formatted_artworks_count}
              </Typography>
            </Grid>
          </Grid>

          <Grid container className="featured-works">
            <Grid item xs={12} md={12} align="center">
              <Typography className="featured-text">
                Featured artworks
              </Typography>
            </Grid>
            {artworks.map(artwork => {
              const { title, imageUrl } = artwork;
              return (
                <Grid item xs={12} md={4} className="artworks-container">
                  <img src={imageUrl} alt={title} />
                  <Tooltip title={title}>
                    <Typography className="art-title">{title}</Typography>
                  </Tooltip>
                </Grid>
              );
            })}
            <Grid item xs={6} md={3}></Grid>
          </Grid>
        </>
      </Fade>
    </Modal>
  );
};

export default ArtistProfileModal;
