import React from 'react';
// import { useDispatch } from 'react-redux';
// import useCoronavirusData from 'hooks/useCoronavirusData';
// import useFetch from 'hooks/useFetch';
import DataList from 'components/UI/DataList';
import {connect} from 'react-redux';
// import {SET_GLOBAL_DATA} from 'reducer';

const Home = function({globalData}){
  // const {data, loading} = useCoronavirusData('/full.json');
  // const dispatch = useDispatch();

  if(!globalData){
    return(<div>Cargando los datos de hoy....</div>);
  }

  // dispatch({
  //   type: SET_GLOBAL_DATA,
  //   data: {
  //     confirmed: data.confirmed,
  //     deaths: data.deaths,
  //     recovered: data.recovered
  //   }
  // });
  return <DataList confirmed={globalData.confirmed} 
                   deaths= {globalData.deaths} 
                   recovered = {globalData.recovered} 
          />;
};

  function mapStateToProps(state) {
    return {
      globalData: state
    };
  }

export default connect(mapStateToProps)(Home);