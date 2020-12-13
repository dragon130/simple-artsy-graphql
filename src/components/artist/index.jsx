import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { Grid, CircularProgress, Typography } from "@material-ui/core";
import { POPULAR_ARTISTS } from "../../graphql/queries";
import ArtistItem from "./ArtistItem";

const Artist = ({ size }) => {
  const [artists, setArtists] = useState([]);
  const { data, error, loading } = useQuery(POPULAR_ARTISTS, {
    variables: { size }
  });

  useEffect(() => {
    if (
      data &&
      data.popular_artists &&
      Array.isArray(data.popular_artists.artists)
    ) {
      setArtists(data.popular_artists.artists);
    }
  }, [data]);

  return (
    <Grid container align="center" className="grid-container">
      {error && (
        <>
          <Typography>
            Oops! Looks like something went wrong, care to try again?
          </Typography>
        </>
      )}
      {loading && (
        <div className="loading-container">
          <CircularProgress size={100} />
        </div>
      )}
      {!loading && (
        <>
          {artists.map(artist => {
            return <ArtistItem artist={artist} />;
          })}
        </>
      )}
    </Grid>
  );
};

export default Artist;
