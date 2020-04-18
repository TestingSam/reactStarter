import React, { Component } from "react";
import { CardSlideItem } from "react-card-slide/dist";
import { CardSlide } from "react-card-slide/dist";
import { connect } from "react-redux";
import { getFromGETRequest } from "./actions/allActions";
import { postToPOSTRequest } from "./actions/allActions";

class BaseComponent extends Component {
  state = {
    //STATE_VARIABLES
  };
  componentDidMount() {
    //COMPONENTDIDMOUNT
  }
  //EVENT FUNCTION SECTION

  render() {
    //DATA VARIABLE SECTION
    const {} = this.props;
    return <div></div>;
  }
}
// onChange={this.onChangeTest.bind(this)}
//EVENT ={EVENTATTRIBUTEVALUE}
const mapStateToProps = (state) => ({
  //DATA VARIABLE SECTION: state.data.MAP_STATE_TO_PROP_VARIABLE
});

export default connect(mapStateToProps, {
  getFromGETRequest,
  postToPOSTRequest,
})(BaseComponent);
