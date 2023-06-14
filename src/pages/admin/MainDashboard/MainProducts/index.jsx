import React, { useState, useEffect } from 'react';
import { useGetLapTop } from './function';
import { DataGrid } from '@mui/x-data-grid';

import DetailProduct from './DetailProduct';

import { Modal } from '@mui/material';

import './style.css';

const listType = [
  { id: 'laptops', name: 'Laptop' },
  { id: 'monitors', name: 'Monitors' },
  { id: 'keyboards', name: 'Keyboards' },
];

function MainProducts() {
  const [state, setState] = useState({
    columns: [
      { field: 'id', headerName: 'STT', width: 270, editable: true },
      { field: 'name', headerName: 'Product Name', width: 270 },
      { field: 'originalPrice', headerName: 'Original Price', width: 270 },
      { field: 'sale', headerName: 'Sale', width: 270 },
      { field: 'sale_price', headerName: 'Sale Price', width: 270 },
      { field: 'quantity', headerName: 'Quantity', width: 270 },
    ],
    rows: [],
    selectedType: window.localStorage.getItem('selectedTypeProduct') || 'laptops',
    isDetailModal: false,
    idProduct: '',
  });

  const handleOpenModalDetail = () => setState({ ...state, isDetailModal: true });
  const handleCloseModalDetail = () => setState({ ...state, isDetailModal: false });

  const { data, refetch } = useGetLapTop(state.selectedType);

  useEffect(() => {
    const rows = data?.rows?.map(r => {
      return {
        id: r._id,
        name: r.name,
        originalPrice: r.original_price,
        sale: r.sale,
        sale_price: r.sale_price,
        quantity: r.quantity,
      };
    });
    setState({
      ...state,
      rows: rows,
    });
  }, [data]);

  useEffect(() => {
    localStorage.setItem('selectedTypeProduct', state.selectedType);
  }, [state.selectedType]);

  useEffect(() => {
    if (state?.idProduct === '') return;
    handleOpenModalDetail();
  }, [state.idProduct]);

  return (
    <div className="productMainAdmin">
      <div className="headerProduct">
        <div className="productTitle">Sản phẩm</div>
        <select
          value={state.selectedType}
          onChange={e => {
            setState({ ...state, selectedType: e.target.value });
          }}
          className="select"
        >
          {listType?.map((s, index) => {
            return (
              <option className="selected" key={index} value={s.id}>
                {s.name}
              </option>
            );
          })}
        </select>
      </div>
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={state?.rows}
          columns={state?.columns}
          pageSize={5}
          rowsPerPageOptions={[10]}
          onSelectionModelChange={itm => setState({ ...state, idProduct: itm[0] })}
        />
      </div>

      <Modal
        open={state.isDetailModal}
        onClose={handleCloseModalDetail}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div
          style={{
            backgroundColor: '#fff',
            height: '93%',
            width: '1000px',
            position: 'absolute',
            top: '5%',
            left: '15%',
            borderRadius: '30px',
            overflow: 'scroll',
            overflowY: 'hidden',
          }}
        >
          <DetailProduct
            idProduct={state?.idProduct}
            handleCloseModalDetail={handleCloseModalDetail}
            refetchData={refetch}
          />
        </div>
      </Modal>
    </div>
  );
}

export default MainProducts;
