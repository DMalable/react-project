import { Header } from "./Header";

export const Map = (props) => {
  const { navigateTo } = props;

  return (
    <>
      <Header navigateTo={navigateTo} />
      <>Map</>
    </>
  );
};
