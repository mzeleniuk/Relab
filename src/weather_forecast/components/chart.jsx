import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import {Sparklines, SparklinesLine, SparklinesReferenceLine} from 'react-sparklines';

function average(data) {
  return _.round(_.sum(data) / data.length);
}

const Chart = (props) => {
  return (
    <div>
      <Sparklines data={props.data} height={120}>
        <SparklinesLine color={props.color}/>
        <SparklinesReferenceLine type="avg"/>
      </Sparklines>

      <div className="text-center">
        {average(props.data)} {props.units}
      </div>
    </div>
  );
};

Chart.propTypes = {
  data: PropTypes.array,
  color: PropTypes.string,
  units: PropTypes.string
};

export default Chart;
