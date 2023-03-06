import { TableCell } from "./TableCell";

export function TableRow({ flight }) {
  const words = Object.values(flight);
  return (
    <tr>
      <td>✈</td>
      {words?.map((word, _index) => (
        <TableCell key={_index} word={word}/>
      ))}
    </tr>
  );
}
