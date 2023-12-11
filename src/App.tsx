import { FC } from "react";
import Box from "./components/Box";

const App: FC = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center gap-12">
      <Box bgColor="bg-red-500" name="Box A" isRounded={true} />
      <Box bgColor="bg-blue-500" name="Box B" isRounded={false} />
    </div>
  );
};

export default App;
