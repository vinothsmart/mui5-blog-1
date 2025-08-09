import {
  List,
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Box,
  Typography,
} from "@mui/material";

import postImage from "../../static/image1.jpg";
import postImage1 from "../../static/image2.jpg";
import postImage2 from "../../static/image3.jpg";
import postImage3 from "../../static/image4.jpg";

const RightBar = () => {
  return (
    <Box>
      <Typography align="center" bgcolor="black" color="white">
        Most Popular
      </Typography>
      <List
        sx={{
          width: "100%",
          height: "100%",
          maxWidth: 360,
          bgcolor: "background.paper",
        }}
      >
        <ListItem alignItems="flex-end">
          <ListItemAvatar>
            <Avatar
              sx={{ height: 80, width: 80 }}
              variant="square"
              alt="Remy Sharp"
              src={postImage}
            />
          </ListItemAvatar>
          <ListItemText secondary=" - I Post one sampel" />
        </ListItem>
        <ListItem alignItems="flex-end">
          <ListItemAvatar>
            <Avatar
              sx={{ height: 80, width: 80 }}
              variant="square"
              alt="Remy Sharp"
              src={postImage1}
            />
          </ListItemAvatar>
          <ListItemText secondary=" - I Post one sampel" />
        </ListItem>
        <ListItem alignItems="flex-end">
          <ListItemAvatar>
            <Avatar
              sx={{ height: 80, width: 80 }}
              variant="square"
              alt="Remy Sharp"
              src={postImage2}
            />
          </ListItemAvatar>
          <ListItemText secondary=" - I Post one sampel" />
        </ListItem>
        <ListItem alignItems="flex-end">
          <ListItemAvatar>
            <Avatar
              sx={{ height: 80, width: 80 }}
              variant="square"
              alt="Remy Sharp"
              src={postImage3}
            />
          </ListItemAvatar>
          <ListItemText secondary=" - I Post one sampel" />
        </ListItem>
      </List>
    </Box>
  );
};
export default RightBar;
