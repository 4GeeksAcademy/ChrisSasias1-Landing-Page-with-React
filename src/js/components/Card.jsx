import React from "react";

export const Card = (props) => {

    return (

        <>


            <div className="card m-1" style={{ width: "auto" }}>
                <img src={props.image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                    <p className="card-text">{props.info}</p>
                    <a href="#" className="btn btn-primary">Find Out More!</a>

                </div>
            </div>


        </>

    )


}