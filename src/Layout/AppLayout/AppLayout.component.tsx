import {ReactChildren} from "../../types"
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline"
import {Header} from "./Header";
import {Footer} from "./Footer";


export const AppLayout:React.FC<ReactChildren> = ({children}) => {
  return (
    <Box sx={{display:"flex", flexDirection: "column", minHeight: "100vh"}}>
      <CssBaseline />
      <meta name="viewport" content="initial-scale=1, width=device-width" />
      <Header />
      <Box component={"main"} sx={{display:"flex", flex: "1 1 auto"}}>
        {children}
      </Box>
      <Footer />
    </Box>
  )
}

