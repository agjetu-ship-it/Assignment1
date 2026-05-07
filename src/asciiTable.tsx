export const ASCIITableTable: [string, string][] = [
    ["0", "NUL"],
    ["1", "SOH"],
    ["2", "STX"]
];
export function ASCIITable() {
    return <table className="scientificTable">
        <thead>
            <tr>
                <th>Number</th>
                <th>English Representation (ASCII)</th>
            </tr>
        </thead>
        <tbody>
            {ASCIITableTable.map((character: [string, string], index: number) => {
                const [characterNumber, characterCharacter] = character;
                return <tr key={index}>
                    <td>{characterNumber}</td>
                    <td>{characterCharacter}</td>
                </tr>;
            })}
        </tbody>
    </table>
}