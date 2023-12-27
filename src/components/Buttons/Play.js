import { Button, Typography } from "@mui/material";

const PlayButton = () => {
  return (
    <Button
      variant="contained"
      sx={{
        background: "#db0000",
        color: "#fff",
        width: "10%",
        mt: 4,
        borderRadius: "6px",
      }}
    >
      <Typography variant="caption">Play</Typography>
    </Button>
  );
};

export default PlayButton;
