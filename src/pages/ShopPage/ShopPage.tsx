import { useSelector } from 'react-redux';
import type { RootState } from '../../store';
import { ShopBlock } from '../../components/ShopBlock';

export const ShopPage = () => {
  const shopContent = useSelector((state: RootState) => state.content.shop);

  return (
    <ShopBlock {...shopContent}/>
  );
};