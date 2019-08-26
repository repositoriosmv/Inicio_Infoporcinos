import React from 'react';
import ItemsCarousel from 'react-items-carousel';
import range from 'lodash/range';
import process from "../icons/process.svg";
import { Col } from 'react-bootstrap'

export default class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      windowSize: "",
      thumbWidth: 75
    };
  }

  handleResize = e => {
    const windowSize = window.innerWidth;
    const thumbWidth = (windowSize >= 480 && 100) || 75;
    this.setState(prevState => {
      return {
        windowSize,
        thumbWidth
      };
    });
  };

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
  }
  componentWillMount() {

    this.setState({
      children: [],
      activeItemIndex: 0,
    });

    setTimeout(() => {

      let createChildren = n => n.map(i =>
         <div className="bg-light rounded mx-4 pt-1" style={{ height: '100%' }}>
              <div className="mx-auto mt-4 rounded-circle" style={{ height: '40px', width: '40px', backgroundColor: "#dd9835" }}>
                <img src={process} className="w-100 h-100 mx-auto" />
              </div>
              {i}
            </div> 

      );

      let onetarjet = (
        <div>
          <div className="text21">Sistema de Trazabilidad</div>
          <div className="text-center text-secondary p-4"><p>
            Permite a el control y seguimiento del producto, <br /> en
            cada uno de los procesos.</p>
          </div>
        </div>
      );
      let twotarjet = (
        <div>
          <div className="text21">Niveles de Acceso </div>
          <div className="text-center text-secondary p-4">
            {" "}
            Divide cada usuario según su rol y permite <br /> acceso a
            diferentes secciones.
      </div>
        </div>
      );
      let threetarjet = (
        <div>
          <div className="text21">Claves Unicas </div>
          <div className="text-center text-secondary p-4">
            La seguridad de la información de cada <br /> usuario es
            importante.
      </div>
        </div>
      );
      let fourtarjet = (
        <div>
          <div className="text21">Sistema de Trazabilidad</div>
          <div className="text24">
            Permite a el control y seguimiento del producto, <br /> en
            cada uno de los procesos.
            </div>
        </div>
      );
      let fivetarjet = (
        <div>
          <div className="text21">Niveles de Acceso </div>
          <div className="text24">
            {" "}
            Divide cada usuario según su rol y permite <br /> acceso a
            diferentes secciones.
      </div>
        </div>
      );
      let sixtarjet = (
        <div>
          <div className="text21">Claves Unicas </div>
          <div className="text24">
            La seguridad de la información de cada <br /> usuario es
            importante.
      </div>
        </div>
      );

      this.setState({
        children: createChildren([onetarjet, twotarjet, threetarjet, fourtarjet, fivetarjet, sixtarjet]),
      })
    }, 100);
  }



  changeActiveItem = (activeItemIndex) => this.setState({ activeItemIndex });

  render() {
    const {
      activeItemIndex,
      children,
    } = this.state;

    let adelante = (
      <div className='rounded-circle text-center py-1 text-light' style={{ height: '40px', width: '70px', backgroundColor: "#dd9835" }}> {'<'} </div>
    )
    let atras = (
      <div className='rounded-circle text-center py-1 text-light' style={{ height: '40px', width: '400px', backgroundColor: "#dd9835" }}> {'>'} </div>
    )
    let card = this.state.windowSize > 800 ? 3 : 1;
    console.log('card ', card);
    return (
      <ItemsCarousel
        // Placeholder configurations
        enablePlaceholder
        numberOfPlaceholderItems={3}
        minimumPlaceholderTime={1000}
        // placeholderItem={<div style={{ height: 200, background: '#900' }}>Placeholder</div>}

        // Carousel configurations

        numberOfCards={card}
        gutter={12}
        showSlither={true}
        firstAndLastGutter={false}
        freeScrolling={false}

        // Active item configurations
        requestToChangeActive={this.changeActiveItem}
        activeItemIndex={activeItemIndex}
        activePosition={'center'}

        chevronWidth={40}
        rightChevron={atras}
        leftChevron={adelante}
        outsideChevron={true}
      >
        {children}
      </ItemsCarousel>
    );
  }
}
