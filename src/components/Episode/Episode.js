import React from "react";

export default function Episode(props) {
    const {name, air_date, episode, cover_img} = props.episode;
    return (
        <div className="episode">
            <div className="episodeCover">
            {
                cover_img ? <img src={cover_img} alt={name} width={300}/> : <img src={"https://enteracloud.mx/wp-content/uploads/2021/08/placeholder.png"} alt={name} width={300}/>
            }
        </div>
            <h1>{name}</h1>
            <h2>{air_date}</h2>
            <h3>{episode}</h3>
        </div>
    );

    // 3 diferentes formas de solucionar si no tenemos la imagen 
    //1
    //<img src={cover_img ? cover_img : "https://enteracloud.mx/wp-content/uploads/2021/08/placeholder.png"} alt={name} width={300}/>

    //2
    //{
     //   cover_img ? <img src={cover_img} alt={name} width={300}/> : <img src={"https://enteracloud.mx/wp-content/uploads/2021/08/placeholder.png"} alt={name} width={300}/>
    //}

    //3
    //con CSS ---- esto es tarea ---
}