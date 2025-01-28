export const themeHandler = ({ theme }: { theme: string }) => {
  let textColor = "white";
  let bgColor = "black";
  if (theme === "dark") {
    textColor = "#FAFAFA";
  } else {
    textColor = "black";
    bgColor = "#FAFAFA";
  }

  return { textColor, bgColor };
};
