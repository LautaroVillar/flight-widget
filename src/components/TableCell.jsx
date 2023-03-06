import {TableLetter} from "./TableLetter"
export function TableCell({ word, index }) {
  return (
    <td>
      {Array.from(word).map((letter, _index) => (
        <TableLetter letter={letter} index={index} />
      ))}
    </td>
  );
}
