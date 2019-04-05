import React from "react";
import DefaultInput from "../../components/UI/DefaultInput";

export default props => (
  <DefaultInput
    placeholder="Place name"
    value={props.placeName}
    onChangeText={props.onChangeText}
  />
);
