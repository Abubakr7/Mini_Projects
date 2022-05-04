import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { useSelector, useDispatch } from "react-redux";
import {
  handleModalOpenAndClose,
  getAlbums,
  handlePageChange,
} from "../../reducers/albums";
import Pagination from "@mui/material/Pagination";
import { useEffect } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

const Albums = (props) => {
  const albums = useSelector((state) => state.albums.albums);
  const album = useSelector((state) => state.albums.album);
  const viewModal = useSelector((state) => state.albums.viewModal);
  const page = useSelector((state) => state.albums.page);
  const total = useSelector((state) => state.albums.total);

  const dispatch = useDispatch();

  const onOpen = (id) => {
    dispatch(handleModalOpenAndClose({ view: true, id: id }));
  };

  const onClose = () => {
    dispatch(handleModalOpenAndClose({ view: false }));
  };

  const onChange = (event, page) => {
    dispatch(handlePageChange(page));
    dispatch(getAlbums(page));
  };

  useEffect(() => {
    dispatch(getAlbums(page));
  }, []);
  return (
    <Container sx={{ py: 8 }} maxWidth="md">
      {/* End hero unit */}
      <Grid container spacing={4}>
        {albums.map((card) => (
          <Grid item key={card.id} xs={12} sm={6} md={4}>
            <Card
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <CardMedia
                component="img"
                image={card.avatar}
                alt="random"
                height={200}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography
                  gutterBottom
                  component="p"
                  style={{ fontWeight: "bold" }}
                >
                  {card.first_name + " " + card.last_name}
                </Typography>
                <Typography
                  style={{
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                  }}
                >
                  {card.email}
                </Typography>
              </CardContent>
              <CardActions>
                <Button onClick={() => onOpen(card.id)} size="small">
                  View
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
        <Pagination
          style={{ marginTop: 10 }}
          page={page}
          onChange={onChange}
          count={total}
        />
      </Grid>
      <Dialog open={viewModal} onClose={onClose}>
        <DialogTitle id="alert-dialog-title">View Album</DialogTitle>
        <DialogContent>
          <div>
            <img src={album.avatar} alt="avatar" />
          </div>
          Name: {album.first_name} <br />
          Lastname: {album.last_name} <br />
          Email: {album.email}
          <br />
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} autoFocus>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default Albums;
