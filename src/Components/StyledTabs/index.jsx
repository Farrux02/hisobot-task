import { Tab, Tabs, withStyles } from "@material-ui/core"

export const StyledTabs = withStyles({
  indicator: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "transparent",
    height: "3px",
    "& > span": {
      maxWidth: 130,
      width: "100%",
      backgroundColor: "#635ee7",
    },
  },
})((props) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />)

export const StyledTab = withStyles((theme) => ({
  root: {
    textTransform: "none",
  },
}))((props) => <Tab disableRipple {...props} />)
