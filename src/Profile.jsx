import { Header } from "./Header";
import { Button, Input, FormLabel } from "@material-ui/core";

export const Profile = (props) => {
  const { navigateTo } = props;

  return (
    <>
      <Header navigateTo={navigateTo} />
      <>Profile</>
    </>
  );
};
