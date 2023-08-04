
import localFont from "next/font/local";

// import { ShellThemeProvider } from "@sede-x/shell-ds-react-framework";

const myFont = localFont({
  variable: "--shell-font",
  src: [
    {
      path: "../fonts/ShellBold.woff2",
      weight: "bold",
      style: "normal",
      
    },
    {
      path: "../fonts/ShellBook.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/ShellBookItalic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../fonts/shellheavy-webfont.woff2",
      weight: "700",
      style: "italic",
    },
    {
      path: "../fonts/ShellHeavy.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../fonts/ShellLight.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/ShellLightItalic.woff2",
      weight: "300",
      style: "italic",
    },
    {
      path: "../fonts/ShellMedium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/ShellMediumItalic.woff2",
      weight: "500",
      style: "italic",
    },
  ],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <link
          href="https://shell-fonts.azureedge.net/index.css"
          rel="preconnect"
        />
      </head>
      <body className={myFont.className}>
        {/** Font / page layout shift still occurs, so moving the shell provider to page.tsx */}
        {/** also page.tsx is `use client` component and layout should to be kept as server component */}
        {/* <ShellThemeProvider theme="light"> */}
        {children}
        {/* </ShellThemeProvider> */}
      </body>
    </html>
  );
}
