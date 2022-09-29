
export const GifItem = ( {title, url} ) => {
    console.log(title);
    // console.log(b);
  return (
    
      <div className="card">
        <a href={url} target="_blank">
          <img src={url} alt={title} />
        </a>
          <p>{title}</p>
        
      </div>
    
    
  )
}
