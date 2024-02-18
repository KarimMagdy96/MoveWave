import React from "react";
import "./move.css";
import { useParams } from "react-router-dom";
export default function Move() {
  let { id } = useParams();
  const [movieDetails, setmovieDetails] = useState(null);
  return <div>Move</div>;
}
