import { HeaderWithAuth } from "./Header";
// import { Button, Input, FormLabel } from "@material-ui/core";
import PropTypes from "prop-types";

const Profile = (props) => {
  const { navigateTo } = props;

  return (
    <>
      <HeaderWithAuth navigateTo={navigateTo} />
      <>Profile</>
    </>
  );
};

Profile.propTypes = {
  navigateTo: PropTypes.func,
};

export { Profile };
