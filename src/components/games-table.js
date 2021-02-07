import GameRow from './game-row';
import Table from 'react-bootstrap/Table';

function GamesTable() {
    const games = [
        {h: 'a', a: 'b', score: '3-2'},
        {h: 'a', a: 'b', score: '3-2'}, 
        {h: 'a', a: 'b', score: '3-2'}, 
        {h: 'a', a: 'b', score: '3-2'}
    ];
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Home team</th>
                    <th>Away team</th>
                    <th>Score</th>
                </tr>
            </thead>
            <tbody>
                {games.map(g => <GameRow />)}
            </tbody>
        </Table>
    );
}

export default GamesTable;

