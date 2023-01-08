import {Container} from "../../../Style/Container"
import {FooterStyle} from "./Footer.style";

export const Footer:React.FC = () => {
  return (
    <Container component={"footer"} sx={{flex: "0 0 20px"}}>
      This is footer
      <FooterStyle>
      copywrite @ 2023, all rights reserved
    </FooterStyle>
    </Container>
  )
}

