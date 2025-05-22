import { useSelector } from 'react-redux';
import type { RootState } from '../../store';
import { ContentBlock } from '../../components/ContentBlock';


export const HomePage = () => {
  const homeContent = useSelector((state: RootState) => state.content.home);

  return (
    <ContentBlock {...homeContent} />
  );
};