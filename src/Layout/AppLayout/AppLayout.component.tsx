import {ReactChildren} from "../../types"
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline"

export const AppLayout:React.FC<ReactChildren> = ({children}) => {
  return (
    <Box sx={{display:"flex"}}>
      <CssBaseline />
      <meta name="viewport" content="initial-scale=1, width=device-width" />
      <Box component={"main"} sx={{display:"flex"}}>
        This is App Layout
        {children}
      </Box>
    </Box>
  )
}

