import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import MainPage from './MainPage';
import { fetchLaptops } from '~/apis/client';
import IntroHomePage from '~/components/Intro/IntroHomePage';
import SpinnerLoader from '~/components/common/SpinnerLoader/Spinner';

function Home() {
  const [loading, setLoading] = useState(false);
  const [laptops, setLaptops] = useState(null);

  const [query] = useSearchParams();
  const search = query.get('search') || '';
  const field = query.get('field') || '';
  const ascSort = query.get('ascSort') || 'false';

  const fetchDataPage = async () => {
    setLoading(true);

    const rs = await fetchLaptops(search, field, ascSort);
    setLoading(false);
    if (rs) {
      setLaptops(rs);
    } else {
      return <h1>Something wrong</h1>;
    }
  };

  useEffect(() => {
    fetchDataPage()
      .then(() => setLoading(false))
      .catch(err => setLoading(false));
  }, [search, field, ascSort]);

  if (loading) {
    return (
      <>
        <IntroHomePage />
        <SpinnerLoader open={loading} />
        <MainPage data={null} isLoading={loading} />
      </>
    );
  }

  return (
    <>
      <IntroHomePage />
      <MainPage data={laptops} />
    </>
  );
}

export default Home;
