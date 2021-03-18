import { states } from "../../../data";

export default function handler({ query: { postal } }, res) {
  const filteredState = states.filter((state) => state.postal === postal);
  if (filteredState.length > 0) {
    res.status(200).json(filteredState[0]);
  } else {
    res.status(404).json({ message: "oops" });
  }
}
