
function GamesRow(props) {

    return (
        <tr>
            <td>{props.HomeTeam}</td>
            <td>{props.AwayTeam}</td>
            <td>{props.Score}</td>
            <td>{props.Date}</td>
            <td>{props.Time}</td>
        </tr>
    );
}

export default GamesRow;


