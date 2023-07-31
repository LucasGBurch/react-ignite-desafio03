import { Outlet } from "react-router-dom";
import { LayoutContainer } from "./styles";

// Criar o Header e o Footer
export function DefaultLayout() {
  return (
    <LayoutContainer>
      
      <Outlet />
    </LayoutContainer>
  )
}
