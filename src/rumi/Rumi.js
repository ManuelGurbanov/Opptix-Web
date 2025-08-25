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
import M11Config from "./M11";
import M12Config from "./M12";
import M13Config from "./M13";

import M14Config from "./M14"; 
import { useParams } from "react-router-dom";
import A3Config from "./A3";
import ViewerInicio from "./ViewerInicio";
import M15Config from "./M15";
import M16Config from "./M16";
import M17Config from "./M17";
import M18Config from "./M18";
import M19Config from "./M19";

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
  A3: A3Config,
  M11: M11Config,
  M12: M12Config,
  M13: M13Config,
  M14: M14Config,
  M15: M15Config,
  M16: M16Config,
  M17: M17Config,
  M18: M18Config,
  M19: M19Config
};

function Rumi() {
  const { id } = useParams();
  console.log("Param id:", id);

  const idUpper = id?.toUpperCase();
  console.log("Normalized id:", idUpper);

  if (idUpper?.startsWith("M14")) {
    const side = idUpper.replace("M14", "");
    console.log("M14 side:", side);
    return <M14Config side={side} />;
  }
  if (idUpper?.startsWith("M15")) {
    const side = idUpper.replace("M15", "");
    console.log("M15 side:", side);
    return <M15Config side={side} />;
  }

  const Module = modules[idUpper];

  if (!Module) return <div>Módulo no encontrado para id: {id}</div>;

  return <Module />;
}

export default Rumi;
