import { FC } from "react";

interface BoxProps {
  bgColor: string;
  name: string;
  isRounded: boolean;
}

const Box: FC<BoxProps> = ({ bgColor, name, isRounded }) => {
  return (
    <div className={`${bgColor} w-40 h-40 ${isRounded && "rounded-full"}`}>
      {name}
    </div>
  );
};

export default Box;
