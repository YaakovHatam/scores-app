import GameRow from './game-row';
import Table from 'react-bootstrap/Table';
import { connect } from 'react-redux';

function GamesTable(props) {
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Home team</th>
                    <th>Away team</th>
                    <th>Score</th>
                    <th>Date</th>
                    <th>Time</th>
                </tr>
            </thead>
            <tbody>
                {props.games.map(g => <GameRow {...g} />)}
            </tbody>
        </Table>
    );
}

function mapStateToProps(state, ownProps) {
    return {
        games: state.gameReducer.games
    }
}

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(GamesTable);

