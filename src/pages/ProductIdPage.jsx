import React, { useEffect } from 'react'
import InfoIdPage from '../components/productIdPage/InfoIdPage';
import useFetch from '../hooks/useFetch';
import { useParams } from 'react-router-dom';
import SimilarItems from '../components/productIdPage/SimilarItems';
import SliderImages from '../components/productIdPage/SliderImages';
import './styles/productIdPage.css';

const ProductIdPage = () => {

  const [ productId, getProductId ] = useFetch();
  const param = useParams();

  useEffect(() => {
    const url = `https://e-commerce-api-v2.academlo.tech/api/v1/products/${param.id}`;
    getProductId(url);
  }, [param]);
  

  
  return (
    <div>
      <h2>idPoroduct</h2>
      <SliderImages 
      images={productId?.images}
      />
      <div className='producId__info'>
      <InfoIdPage 
      productId={productId}
      />
      </div>
      <SimilarItems 
      categoryId={productId?.categoryId}
      prodId={param.id}
      />
    </div>
  )
}

export default ProductIdPage;