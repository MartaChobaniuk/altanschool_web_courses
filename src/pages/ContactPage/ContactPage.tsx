import { useSelector } from 'react-redux';
import { Contact } from '../../components/Contact';
import type { RootState } from '../../store';

export const ContactPage = () => {
  const contactContent = useSelector((state: RootState) => state.content.contact);

  return (
    <Contact {...contactContent} />
  );
}