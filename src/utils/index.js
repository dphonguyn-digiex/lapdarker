export const getEndPointURL = path => {
  return path.slice(path.lastIndexOf('/') + 1);
};

export const getAbsolutePath = path => {
  return path.slice(path.indexOf('/') + 1);
};

export const classifyDataToTable = data => {
  let columns = [];
  let rows = data?.map((item, index) => {
    const { updatedAt, idUser, __v, products, ...rest } = item;
    return { id: index, ...rest };
  });
  const keys = Object.keys(data[0])?.filter(
    item => item !== 'updatedAt' && item !== 'idUser' && item !== '__v' && item !== 'products',
  );
  keys?.map(key => columns.push({ name: key, selector: row => row[`${key}`], sortable: true }));
  return {
    columns,
    rows,
  };
};

export const ignoreSubHeader = path => {
  if (path.includes('/checkout')) return true;
  if (path.includes('/user')) return true;
  if (path.includes('/product')) {
    if (path.split('/').length > 3) return true;
  }
  return false;
};

export const isVietnamesePhoneNumber = number => /(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/.test(number);

export const handleOrdersData = state => {
  let ordersTypes = {
    type0: state.filter(order => order.state === 'WAIT_FOR_PAY'),
    type1: state.filter(order => order.state.includes('WAIT_FOR_CONFIRM')),
    type2: state.filter(order => order.state === 'PROCESSING'),
    type3: state.filter(order => order.state === 'TRANSPORTING'),
    type4: state.filter(order => order.state === 'DELIVERED'),
  };
  return ordersTypes;
};
