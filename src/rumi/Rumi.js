import M1Config from "./M1";
import M2Config from "./M2";
import M3Config from "./M3";
import M4Config from "./M4";
import M5Config from "./M5";
import M6Config from "./M6";
import M7Config from "./M7";
import M8Config from "./M8";
import M9Config from "./M9";
import M10Config from "./M10";

import { useParams } from "react-router-dom";
import A3Config from "./A3";
import ViewerInicio from "./ViewerInicio";

const modules = {
  M1: M1Config,
  M2: M2Config,
  M3: M3Config,
  M4: M4Config,
  M5: M5Config,
  M6: M6Config,
  M7: M7Config,
  M8: M8Config,
  M9: M9Config,
  M10: M10Config,
  VIEWERINICIO: ViewerInicio,
  A3: A3Config
};

function Rumi() {
  const { id } = useParams();
  console.log("Param id:", id);

  const idUpper = id?.toUpperCase();
  console.log("Normalized id:", idUpper);

  const Module = modules[idUpper];

  if (!Module) return <div>Módulo no encontrado para id: {id}</div>;

  return <Module />;
}

export default Rumi;
