import { useSelector } from 'react-redux';
import { Collection } from '../../components/Collection';
import type { RootState } from '../../store';

export const BlogPage = () => {
  const blogContent = useSelector((state: RootState) => state.content.collection);

  return (
    <Collection {...blogContent} />
  );
}