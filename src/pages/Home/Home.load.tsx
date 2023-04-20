import React, { useEffect } from 'react'
import useBanks from '../../hook/useListBanks';
import { Home } from './Home'

export const HomeLoad = () => {
  const banks = useBanks((state) => state.banks);
  const loading = useBanks((state) => state.loading);
  const loadBanks = useBanks((state) => state.loadBanks);

  useEffect(() => {
    loadBanks();
  }, [loadBanks]);

  if (loading) {
    return <div>Loading banks...</div>;
  }


console.log('listBanks', banks)
  return (
    <Home banks={banks} />
  )
}
