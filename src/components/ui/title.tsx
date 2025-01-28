import { TFontSize, TFontSizeMap } from "@/types/types";

type TitleProps = {
  text: string;
  fontSize?: keyof TFontSize;
  color?: string;
  textAlign?: string;
  margin?: string;
};

const Title = ({
  text,
  fontSize = "lg",
  color = "rgb(240, 240, 240)",
}: TitleProps) => {
  return (
    <h1
      style={{
        fontFamily: "Outfit",
        fontWeight: 500,
        fontSize: TFontSizeMap[fontSize],
        color: color,
        lineHeight: "1.2",
      }}
    >
      {text}
    </h1>
  );
};

export default Title;
