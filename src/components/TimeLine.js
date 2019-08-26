import React from "react";
import HorizontalTimeline from "react-horizontal-timeline";

const VALUES = ["2018-03-22", "2018-03-23"];

const EXAMPLE = [
  {
    data: "2004-01-1",
    status: "status",
    statusB: "Nace la Idea",
    statusE: "Crea una Plataforma de información para el Sector"
  },
  {
    data: "2005-03-03",
    status: "status",
    statusB: "Inicio Diseño y Desarrollo",
    statusE: "Se comienza la elaboración de la plataforma"
  },
  {
    data: "2006-01-01",
    status: "status",
    statusB: "Primeros Contactos",
    statusE: "Con empresas del sector regional. Plantas de"
  },
  {
    data: "2007-03-23",
    status: "status",
    statusB: "Alianza Estratégica SOLLA S.A",
    statusE: "Se aportan equipos de la medición a la plataforma de sacrifio que "
  },
  {
    data: "2008-03-23",
    status: "status",
    statusB: "Formula la Estimación de Magro",
    statusE: "Se retoma el Estudio de Asoporcicultores (PorkColumbia) sobre la fórmula se implementa"
  },
  {
    data: "2008-03-23",
    status: "status",
    statusB: "Prueba Piloto",
    statusE: "La Cooperativa Colanta propone realizar una Prueba"
  },
  {
    data: "2009-03-23",
    status: "status",
    statusB: "Central Ganadera S.A",
    statusE: "Manifiesta su decisión de realizar el Piloto de la"
  },
  {
    data: "2009-03-23",
    status: "status",
    statusB: "Feria AgroExpo 2009",
    statusE: "Se partipa en la feria haciendo formal presentación"
  }
];

export default class Timeline extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      curIdx: 0,      
      prevIdx: -1
    };
  }

  //state = { value: 0, previous: 0 };

  render() {    
    const {curIdx, prevIdx} = this.state;
    const curStatus = EXAMPLE[curIdx].statusB;
    const curStatusE = EXAMPLE[curIdx].statusE;
    const prevStatus = prevIdx >= 0 ? EXAMPLE[prevIdx].statusB : '';

    return (
      <div>
        {/* Bounding box for the Timeline */}
        <div
          style={{
            width: "100%",
            height: "100px",
            margin: "0 auto",
            marginTop: "20px",
            fontSize: "15px"
          }}
        >
          <HorizontalTimeline
            styles={{
              background: "#f8f8f8",
              foreground: "#FEA20A",
              outline: "#dfdfdf"
            }}
            index={this.state.curIdx}
            indexClick={index => {
              const curIdx = this.state.curIdx;
              this.setState({ curIdx: index, prevIdx: curIdx });
            }}            
            values={EXAMPLE.map(x => x.data)}
          />
        </div>
        <div className="text-center">
          {/* any arbitrary component can go here */}
         <p className="font-weight-bold"> {curStatus}</p>
         <p style={{ color : 'gray'}}>{curStatusE}</p> -  
        </div>
      </div>
    );
  }
}
