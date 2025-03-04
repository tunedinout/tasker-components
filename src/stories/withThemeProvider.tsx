import React from "react";
import { ThemeProvider } from "styled-components";
import { DefaultTheme } from "../themes";
import type { StoryContext } from "@storybook/react";

const withThemeProvider = (
  Story: React.ComponentType,
  context: StoryContext
) => {
  const isDarkMode = context.globals.backgrounds?.value === "#333";

  return (
    <ThemeProvider
      theme={{ ...DefaultTheme, mode: isDarkMode ? "dark" : "light" }}
    >
      <Story />
    </ThemeProvider>
  );
};

export default withThemeProvider;
