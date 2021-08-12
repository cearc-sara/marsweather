import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "react-redux";
import { loadTemps } from "../actions/action";
import Chart from "./chart";

const FetchTemp = (props) => {
    const dispatch = useDispatch();
    const fetchTemp = () => {
      dispatch(loadTemps());
    }

    // const fakeTemps = {
    //     temps:[1, 2, 3, 4, 5]
    // }

    // const state = useSelector((state) => ({...state.app}));
    return(
        <>
            <h2>Mars Temperatures fetch temps</h2>
            {props.temps.map((temp) => (
                <Chart temp={temp} fetchTemp={fetchTemp}/>
            ))}
        </>
    )
  }

  function mapStateToProps (state) {
     return{
         temps: state.temps
     }
  }

  export default connect(mapStateToProps, {})(FetchTemp);