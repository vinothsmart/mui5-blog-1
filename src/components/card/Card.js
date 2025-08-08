import {
  Button,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const Card = ({ image }) => {
  return (
    <div>
      <CardMedia
        component="img"
        alt="green iguana"
        height="100%"
        image={image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Perfermes
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Wearing this shirt is like wearing a piece of art. The intricate
          patterns and vibrant colors make a bold statement.
        </Typography>
        <Typography gutterBottom variant="body2" align="center" component="div">
          it's women love it
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary">
          The shirt is made from high-quality materials, ensuring both comfort
          and durability. It's a perfect choice for those who want to express
          their individuality through fashion.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </div>
  );
};
export default Card;
