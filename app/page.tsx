"use client";

import StyledComponentsRegistry from "../lib/registry";
import { ShellThemeProvider, Heading } from "@sede-x/shell-ds-react-framework";
import { SomeContent } from "./SomeContent";



export default function Page() {
  return (
    <ShellThemeProvider theme="light">
      <StyledComponentsRegistry>
      <Heading bold level={1}>This is example of font and page layout shift</Heading>
        <SomeContent />
      </StyledComponentsRegistry>
    </ShellThemeProvider>
  );
}
