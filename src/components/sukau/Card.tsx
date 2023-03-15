import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

export default function MultiActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="../assets/plantation.img"
          alt="plantation-sukau"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Plantation #
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Plantation Description
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Plant
        </Button>
      </CardActions>
    </Card>
  );
}
