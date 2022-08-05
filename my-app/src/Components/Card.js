const Card =({p})=>{
  const {icon_url,id,link,title,category,description,tag}=p;
    return(
    <div className="card">
      <div className="img-container">
      <img src={icon_url} alt="Denim Jeans"  style={{height:"44px", width:"44px", border:"2px solid lightgray",borderRadius: "4px"}}  />
      <span className="spantitle">{title}
      <div className="catagory"> {category}</div>
      </span>
      </div>
      <div className="linkdiv">
      <a href={link} target="_blank" className="link" rel="noreferrer">{link}</a>
      </div>
    <p className="innerpara">{description}</p>
  </div>
    )
}

export default Card;