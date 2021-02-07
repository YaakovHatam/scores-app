import GameRow from './game-row';
import Table from 'react-bootstrap/Table';

function GamesTable() {
    const games = [
        {HomeTeam: 'a', AwayTeam: 'b', Score: '3-2', Date: '01-01-2021', Time: '16:45'},
        {HomeTeam: 'a', AwayTeam: 'b', Score: '3-2', Date: '01-01-2021', Time: '16:45'},
        {HomeTeam: 'a', AwayTeam: 'b', Score: '3-2', Date: '01-01-2021', Time: '16:45'},
        {HomeTeam: 'a', AwayTeam: 'b', Score: '3-2', Date: '01-01-2021', Time: '16:45'},
    ];
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
                {games.map(g => <GameRow {...g} />)}
            </tbody>
        </Table>
    );
}

export default GamesTable;

