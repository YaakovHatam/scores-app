import {ADD_GAME_ACTION} from './../redux/actions';
import { connect } from 'react-redux';

function DataPage(props) {

  const newObj = {
    HomeTeam: null,
    AwayTeam: null,
    Score: null,
    Date: null,
    Time: null
  }

  const inputChange = (key, value) => newObj[key] = value;
  
  return (
    <div>
      {Object.keys(newObj).map(k => <label>{k}: <input onChange={e => inputChange(k, e.target.value)} /></label>)}
      <button onClick={e => props.ADD_GAME_ACTION(newObj)}>Save</button>
    </div>

  );
}


function mapStateToProps(state, ownProps) {
  return {
  }
}

const mapDispatchToProps = {
  ADD_GAME_ACTION
}

export default connect(mapStateToProps, mapDispatchToProps)(DataPage);

