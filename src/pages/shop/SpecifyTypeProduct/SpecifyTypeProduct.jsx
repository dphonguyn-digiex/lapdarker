import { useEffect, useState } from 'react';
// import { useDispatch } from 'react-redux';
import { useLocation, useSearchParams } from 'react-router-dom';

// import { getDevices } from '~/store/actions';
import { getEndPointURL } from '~/utils';
import IntroTypeProduct from '~/components/Intro/IntroTypeProduct';
import MainPage from '~/pages/shop/Home/MainPage';
import { fetchDevices } from '~/apis';
import SpinnerLoader from '~/components/common/SpinnerLoader/Spinner';
import UnreadyProductPage from './UnreadyProduct';

function SpecifyTypeProduct() {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState(null);
  const [showUnreadyProductPage, setShowUnreadyProducePage] = useState(false);

  const [query] = useSearchParams();
  const search = query.get('search') || '';
  const field = query.get('field') || '';
  const ascSort = query.get('ascSort') || 'false';

  // const dispatch = useDispatch();
  const {pathname} = useLocation();
  const fetchDataPage = async (type) => {
    const rs = await fetchDevices(type, search, field, ascSort);
    if (rs) {
      setProducts(rs);
    }
    else {
      return <h1>Something wrong</h1>
    }
  }
  
  useEffect(() => {
    setShowUnreadyProducePage(false);
    fetchDataPage(getEndPointURL(pathname))
      .then(() => setLoading(false))
      .catch(err => {
        console.log('error at SpecifyTypeProduct()', err);
        setLoading(false);
        setShowUnreadyProducePage(true);
      })
  }, [search, field, ascSort, pathname]);
  
  if (loading) {
    return <>
      <IntroTypeProduct data={null} />
      <SpinnerLoader open={loading} />
    </>
  }

  if (showUnreadyProductPage) {
    return <UnreadyProductPage />
  }

  return (
    <div>
      <IntroTypeProduct data={products} />
      <MainPage data={products} />
    </div>
  );
}

export default SpecifyTypeProduct;
