import {ReactChildren} from "../../types"
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline"
import {Header} from "./Header";
import {Footer} from "./Footer";


export const AppLayout:React.FC<ReactChildren> = ({children}) => {
  return (
    <Box sx={{display:"flex", flexDirection: "column"}}>
      <CssBaseline />
      <meta name="viewport" content="initial-scale=1, width=device-width" />
      <Header />
      <Box component={"main"} sx={{display:"flex"}}>
        This is App Layout
        {children}
      </Box>
      <Footer />
    </Box>
  )
}

