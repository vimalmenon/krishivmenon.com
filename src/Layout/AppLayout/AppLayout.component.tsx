import {ReactChildren} from "../../types"


export const AppLayout:React.FC<ReactChildren> = ({children}) => {
  return (
    <div>
      This is App Layout
      {children}
    </div>
  )
}
