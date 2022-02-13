import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: "#55bc7e",
    height: "100vh",
    width: "100%",
    display: "flex",
    overflow:'hidden'
  },
  sideBar: {
    backgroundColor: "#55bc7e",
    height: "100%",
    flex: 0.2,
    position:'static',
    paddingLeft:20,
    paddingTop:20,
  },
  ground: {
    flex: 0.8,
    borderTopLeftRadius: 24,
    backgroundColor: "#f5f6fa",
    overflowY:'scroll'
  },
}));
