import { Header } from "./Header";

export const Profile = (props) => {
  const { navigateTo } = props;

  return (
    <>
      <Header navigateTo={navigateTo} />
      <>Profile</>
    </>
  );
};
