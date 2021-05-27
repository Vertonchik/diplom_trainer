import * as React from "react";
import { Slide, useScrollTrigger } from "@material-ui/core";

export const HideOnScroll = ({ children, hide }) => {
  const trigger = useScrollTrigger();
  if (!hide) return <>{children}</>

  return (
    <Slide timeout={50} direction="down" in={!trigger}>
      {children}
    </Slide>
  )
}