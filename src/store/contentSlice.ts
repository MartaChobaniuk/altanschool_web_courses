import { createSlice } from '@reduxjs/toolkit';
import img_home from '../assets/img_home_pg.png';
import img_about from '../assets/img_about.png';
import img_shop_1 from '../assets/img_shop_1.png';
import img_shop_2 from '../assets/img_shop_2.png';
import img_shop_3 from '../assets/img_shop_3.png';
import img_shop_4 from '../assets/img_shop_4.png';
import big_img from '../assets/img_shop_5.png';
import img_coll_1 from '../assets/img_blog_1.png';
import img_coll_2 from '../assets/img_blog_2.png';
import img_coll_3 from '../assets/img_blog_3.png';
import img_contact from '../assets/img_contact.png';

const initialState = {
  home: {
    title: 'ORGANIC FASHION',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    buttonText: 'SHOP NOW',
    image: img_home,
  },
  about: {
    title: 'ABOUT US',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    text2: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    buttonText: 'LEARN MORE',
    image: img_about,
  },
  shop: {
    title: 'SHOP BY CATEGORIES',
    images: [img_shop_1, img_shop_2, img_shop_3, img_shop_4],
    image: big_img, 
  },
  collection: {
    title: 'NEW COLLECTION',
    images: [img_coll_1, img_coll_2, img_coll_3],
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
  contact: {
  title: 'FOLLOW US',
  placeholders: {
    name: 'Enter your name',
    email: 'Enter a valid email address',
    message: 'Enter your message',
  },
  buttonText: 'SUBMIT',
  image: img_contact,
}
};

export const contentSlice = createSlice({
  name: 'content',
  initialState,
  reducers: {},
});

export default contentSlice.reducer;