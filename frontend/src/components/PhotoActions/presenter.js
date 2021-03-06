import React from "react";
import PropTypes from "prop-types";
import Ionicon from "react-ionicons";
import styles from "./styles.scss";

const PhotoActions = (props, context) => (
  <div className={styles.actions}>
    <div className={styles.icons}>
      <span className={styles.icon} onClick={props.handleHeartClick}>
        {props.isLiked ? (
          <Ionicon icon="ios-pin" fontSize="28px" color="#black" />
        ) : (
          <Ionicon icon="ios-pin-outline" fontSize="28px" color="#black" />
        )}
      </span>
    </div>
    {/* <span className={styles.likes} onClick={props.openLikes}>{props.number} {props.number === 1 ? context.t("Cock") : context.t("Cocks")}</span> */}
  </div>
);
PhotoActions.contextTypes = {
  t: PropTypes.func.isRequired
};

PhotoActions.propTypes = {
  number: PropTypes.number.isRequired,
  isLiked: PropTypes.bool.isRequired,
  photoId: PropTypes.number.isRequired,
  handleHeartClick: PropTypes.func.isRequired,
  openLikes: PropTypes.func.isRequired
};

export default PhotoActions;
