const Banner = ({promocion,boton}) => {
return  <div className='banner'>
<div className='banner__content'>
  <h2 className='banner__title'>{promocion.toUpperCase()}</h2>
  <button className='banner__button'>{boton.toUpperCase()}  {"->"}</button>
</div>

 </div>
}

export default Banner;