import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardMedia } from "@mui/material";
import { Box } from "@mui/system";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
const ImageCard = ({ veggie }) => {
  return (

    
    <Card id={veggie.id} sx={{flexDirection: "column", display: "flex", margin: 5, maxWidth: 300 }}>
      <CardMedia height="140">
        <img src={veggie.image} alt={veggie.title} className="gambarCard" />
      </CardMedia>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {veggie.title}
          </Typography>
          <Box></Box>
          <Typography sx={{flex:1}} variant="body2" color="text.secondary">
           {veggie.summary}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Box>
    </Card>
  );
};

export default ImageCard;
