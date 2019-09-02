import React from 'react';
import { render } from 'react-dom';
import Pagination from 'react-paginating';
import { Col, Row } from "react-bootstrap";

// paginas
let pageone = <div>
    <div className='pb-4'>
      <p className='font-weight-bold  border-bottom fecha-ac'>20 de Mayo 2010</p>
      <p className='h5 text-dark'>Actualización 4.1 Módulo Medición</p>
      <p className='font-weight-normal text-secondary'>Lorem ipsum dolor sit amet,  et dolore magna aliqua. Ut enim ad minim veniam,  total de cada proceso. Integrado a su negocio y sus clientes conquis nostrud exercitation  magna aliqua veniam, quis dolor sit amet,  et dolo</p>
      <p className='font-weight-normal text-secondary'>Lorem ipsum dolor sit amet,  et dolore magna aliqua. Ut enim ad minim  total de cada proceso. Integrado a su negocio y sus clientes conostrud exercitation  aliqua. Ut enim ad</p>
  </div>
  <div className='pb-4'>
      <p className='font-weight-bold  border-bottom fecha-ac'>20 de Mayo 2010</p>
      <p className='h5 text-dark'>Actualización 3.2 Módulo Medición</p>
      <p className='font-weight-normal text-secondary'>Lorem ipsum dolor sit amet,  et dolore magna aliqua. Ut enim ad minim veniam,  total de cada proceso. Integrado a su negocio y sus clientes conquis nostrud exercitation  magna aliqua veniam, quis dolor sit amet,  et dolo</p>
      <p className='font-weight-normal text-secondary'>Lorem ipsum dolor sit amet, ore magna aliqua. Ut enimet doada proceso. Integrado a su negocio y sus clientes conostrud exercitation  aliqua. Ut enim ad</p>
        <div className='pl-4'>
          <p className='font-weight-normal text-secondary pl-4'>Lorem ipsum dolor sit amet,  et dolore magna aliqua. Ut enim ad minim  total</p>
          <p className='font-weight-normal text-secondary pl-4'>Lorem ipsum dolor sit amet,  et doad minim  total</p>
          <p className='font-weight-normal text-secondary pl-4'>Lorem ipsum dol,  et dagd minim  total</p>
          </div>
        </div>
  <div className='pb-4'>
      <p className='font-weight-bold  border-bottom fecha-ac'>20 de Mayo 2010</p>
      <p className='h5 text-dark'>Actualización 3.4 Módulo Medición</p>
      <p className='font-weight-normal text-secondary'>Lorem ipsum dolor sit amet,  et dolore magna aliqua. Ut enim ad minim veniam,  total de cada proceso. Integrado a su negocio y sus clientes conquis nostrud exercitation  magna aliqua veniam, quis dolor sit amet,  et dolo</p>
      <p className='font-weight-normal text-secondary'>Lorem ipsum dolor sit amet,  et dolore magna aliqua. Ut enim ad minim  total de cada proceso. Integrado a su negocio y sus clientes conostrud</p>

  </div>
</div>

let pagetwo = <div>
    <div className='pb-4'>
      <p className='font-weight-bold  border-bottom fecha-ac'>12 de Abril 2010</p>
      <p className='h5 text-dark'>Actualización 4.1 Módulo Medición</p>
      <p className='font-weight-normal text-secondary'>Lorem ipsum dolor sit amet,  et dolore magna aliqua. Ut enim ad minim veniam,  total de cada proceso. Integrado a su negocio y sus clientes conquis nostrud exercitation  magna aliqua veniam, quis dolor sit amet,  et dolo</p>
      <p className='font-weight-normal text-secondary'>Lorem ipsum dolor sit amet,  et dolorea aliqua.ad minim  total de cada proceso. Integrado a su negocio y sus clientes conostrud exercitation  aliqua. Ut enim ad</p>
  </div>
  <div className='pb-4'>
      <p className='font-weight-bold  border-bottom fecha-ac'>20 de Mayo 2010</p>
      <p className='h5 text-dark'>Actualización 3.2 Módulo Medición</p>
      <p className='font-weight-normal text-secondary'>Lorem ipsum dolor sit amet,  et dolore magna aliqua. Ut enim ad minim veniam,  total de cada proceso. Integrado a su negocio y sus clientes conquis nostrud exercitation  magna aliqua veniam, quis dolor sit amet,  et dolo</p>
      <p className='font-weight-normal text-secondary'>Lorem ipsum dolor sit amet, ore magna aliqua. Ut enimet doada proceso. Integrado a su negocio y sus clientes conostrud exercitation  aliqua. Ut enim ad</p>
        <div className='pl-4'>
          <p className='font-weight-normal text-secondary pl-4'>Lorem ipsum dolor sit amet,  et dolore magna aliqua. Ut enim ad minim  total</p>
          <p className='font-weight-normal text-secondary pl-4'>Lorem ipsum dolor sit amet,  et doad minim  total</p>
          <p className='font-weight-normal text-secondary pl-4'>Lorem ipsum dol,  et dagd minim  total</p>
          </div>
        </div>
  <div className='pb-4'>
      <p className='font-weight-bold  border-bottom fecha-ac'>20 de Mayo 2010</p>
      <p className='h5 text-dark'>Actualización 3.4 Módulo Medición</p>
      <p className='font-weight-normal text-secondary'>Lorem ipsum dolor sit amet,  et dolore magna aliqua. Ut enim ad minim veniam,  total de cada proceso. Integrado a su negocio y sus clientes conquis nostrud exercitation  magna aliqua veniam, quis dolor sit amet,  et dolo</p>
      <p className='font-weight-normal text-secondary'>Lorem ipsum dolor sit amet,  et dolore magna aliqua. Ut enim ad minim  total de cada proceso. Integrado a su negocio y sus clientes conostrud</p>

  </div>
</div>

let pagethree = <div>
    <div className='pb-4'>
      <p className='font-weight-bold  border-bottom fecha-ac'>15 de Enero 2010</p>
      <p className='h5 text-dark'>Actualización 4.1 Módulo Medición</p>
      <p className='font-weight-normal text-secondary'>Lorem ipsum dolor sit amet,  et dolore magna aliqua. Ut enim ad minim veniam,  total de cadait amet,  et dolore magna aliqu proceso. Integrado a su negocio y sus clientes conquis nostrud exercitation  magna aliqua veniam, quis dolor sit amet,  et dolo</p>
      <p className='font-weight-normal text-secondary'>Lorem ipsum dolor sit amet,  et dolore magna aliqua. Ut enim ad minim  total de cada proceso. Integrado a su negocio y sus clientes conostrud exercitation  aliqua. Ut enim ad</p>
  </div>
  <div className='pb-4'>
      <p className='font-weight-bold  border-bottom fecha-ac'>20 de Mayo 2010</p>
      <p className='h5 text-dark'>Actualización 3.2 Módulo Medición</p>
      <p className='font-weight-normal text-secondary'>Lorem ipsum dolor sit amet,  et dolore magna aliqua. Ut enim ad minim veniam,  total de cada proceso. Integrado a su negocio y sus clientes conquis nostrud exercitation  magna aliqua veniam, quis dolor sit amet,  et dolo</p>
      <p className='font-weight-normal text-secondary'>Lorem ipsum dolor sit amet, ore magna aliqua. Ut enimet doada proceso. Integrado a su negocio y sus clientes conostrud exercitation  aliqua. Ut enim ad</p>
        <div className='pl-4'>
          <p className='font-weight-normal text-secondary pl-4'>Lorem ipsum dolor sit amet,  et dolore magna aliqua. Ut enim ad minim  total</p>
          <p className='font-weight-normal text-secondary pl-4'>Lorem ipsum dolor sit amet,  et doad minim  total</p>
          <p className='font-weight-normal text-secondary pl-4'>Lorem ipsum dol,  et dagd minim  total</p>
          </div>
        </div>
  <div className='pb-4'>
      <p className='font-weight-bold  border-bottom fecha-ac'>25 de Septiembre 2010</p>
      <p className='h5 text-dark'>Actualización 3.4 Módulo Medición</p>
      <p className='font-weight-normal text-secondary'>Lorem ipsum dolor sit amet,  et dolore magna aliqua. Ut enim ad minim veniam,  total de cada proceso. Integrado a su negocio y sus clientes conquis nostrud exercitation  magna aliqua veniam, quis dolor sit amet,  et dolo</p>
      <p className='font-weight-normal text-secondary'>Lorem ipsum dolor sit amet,  et dolore magna aliqua. Ut enim ad minim  total de cada proceso. Integrado a su negocio y sus clientes conostrud</p>

  </div>
</div>

let pagefour = <div>
    <div className='pb-4'>
      <p className='font-weight-bold  border-bottom fecha-ac'>30 de Noviembre 2010</p>
      <p className='h5 text-dark'>Actualización 4.1 Módulo Medición</p>
      <p className='font-weight-normal text-secondary'>Lorem ipsum dolor sit amet,  et dolore magna aliqua. Ut enim ad minim veniam,  total de cada proceso. Integrado a su negocio y sus clientes conquis nostrud exercitation  magna aliqua veniam, quis dolor sit amet,  et dolo</p>
      <p className='font-weight-normal text-secondary'>Lorem ipsum dolor sit amet,  et dolore magna aliqua. Ut enim ad minim sum dolor sit amet,  et dolore magna a total de cada proceso. Integrado a su negocio y sus clientes conostrud exercitation  aliqua. Ut enim ad</p>
  </div>
  <div className='pb-4'>
      <p className='font-weight-bold  border-bottom fecha-ac'>20 de Mayo 2010</p>
      <p className='h5 text-dark'>Actualización 3.2 Módulo Medición</p>
      <p className='font-weight-normal text-secondary'>Lorem ipsum dolor sit amet,  et dolore magna aliqua. Ut enim ad minim veniam,  total de cada proceso. Integrado a su negocio y sus clientes conquis nostrud exercitation  magna aliqua veniam, quis dolor sit amet,  et dolo</p>
      <p className='font-weight-normal text-secondary'>Lorem ipsum dolor sit amet, ore magna aliqua. Ut enimet doada proceso. Integrado a su negocio y sus clientes conostrud exercitation  aliqua. Ut enim ad</p>
        <div className='pl-4'>
          <p className='font-weight-normal text-secondary pl-4'>Lorem ipsum dolor sit amet,  et dolore magna aliqua. Ut enim ad minim  total</p>
          <p className='font-weight-normal text-secondary pl-4'>Lorem ipsum dolor sit amet,  et doad minim  total</p>
          <p className='font-weight-normal text-secondary pl-4'>Lorem ipsum dol,  et dagd minim  total</p>
          </div>
        </div>
  <div className='pb-4'>
      <p className='font-weight-bold  border-bottom fecha-ac'>20 de Mayo 2010</p>
      <p className='h5 text-dark'>Actualización 3.4 Módulo Medición</p>
      <p className='font-weight-normal text-secondary'>Lorem ipsum dolor sit amet,  et dolore magna aliqua. Ut enim ad minim veniam,  total de cada proceso. Integrado a su negocio y sus clientes conquis nostrud exercitation  magna aliqua veniam, quis dolor sit amet,  et dolo</p>
      <p className='font-weight-normal text-secondary'>Lorem ipsum dolor sit amet,  et dolore magna aliqua. Ut enim ad minim  total de cada proceso. Integrado a su negocio y sus clientes conostrud</p>

  </div>
</div>
// end paginas
const fruits = [
  [pageone],
  [pagetwo],
  [pagethree],
  [pagefour],
];
const limit = 2;
const pageCount = 3;
const total = fruits.length * limit;
 
 class Sliderpages extends React.Component {
  constructor() {
    super();
    this.state = {
      currentPage: 1
    };
  }
 
  handlePageChange = (page, e) => {
    this.setState({
      currentPage: page
    });
  };
 
  render() {
    const { currentPage } = this.state;
    return (
        <div className='d-flex flex-direction-colum justify-content-center'>
        <Row className='w-75 px-3'>
            <Col xs={12} sm={12} md={12} className='px-4'>
          {fruits[currentPage - 1].map(item =><div key={item}> {item}</div>)}
        <Pagination
          total={total}
          limit={limit}
          pageCount={pageCount}
          currentPage={currentPage}
        >
          {({
            pages,
            currentPage,
            hasNextPage,
            hasPreviousPage,
            previousPage,
            nextPage,
            totalPages,
            getPageItemProps
          }) => (

              <div className='d-flex justify-content-center'>
 
              {hasPreviousPage && (
                <button className='bg-white2'
                  {...getPageItemProps({
                    pageValue: previousPage,
                    onPageChange: this.handlePageChange
                  })}
                >
                  {'<'}
                </button>
              )}
 
              {pages.map(page => {
                let activePage = null;
                if (currentPage === page) {
                  activePage = { backgroundColor: '#212121' };
                }
                return (
                  <button  className='bg-white2'
                    {...getPageItemProps({
                      pageValue: page,
                      key: page,
                      style: activePage,
                      onPageChange: this.handlePageChange
                    })}
                  >
                    {page}
                  </button>
                );
              })}
 
              {hasNextPage && (
                <button  className='bg-white2'
                  {...getPageItemProps({
                    pageValue: nextPage,
                    onPageChange: this.handlePageChange
                  })}
                >
                  {'>'}
                </button>
              )}
   
            </div>
          )}
        </Pagination>
        </Col>
      </Row>
      </div>
    );
  }
}
export default Sliderpages;