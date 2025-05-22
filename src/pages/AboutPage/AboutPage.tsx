import { useSelector } from 'react-redux';
import { ContentBlock } from '../../components/ContentBlock';
import type { RootState } from '../../store';

export const AboutPage = () => {
  const aboutContent = useSelector((state: RootState) => state.content.about);

  return (
    <ContentBlock {...aboutContent} />
  );
}