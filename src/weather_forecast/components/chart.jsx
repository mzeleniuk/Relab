import React from 'react';
import PropTypes from 'prop-types';
import {Sparklines, SparklinesLine} from 'react-sparklines';

const Chart = (props) => {
  return (
    <div>
      <Sparklines data={props.data}>
        <SparklinesLine color={props.color}/>
      </Sparklines>
    </div>
  );
};

Chart.propTypes = {
  data: PropTypes.array,
  color: PropTypes.string
};

export default Chart;
