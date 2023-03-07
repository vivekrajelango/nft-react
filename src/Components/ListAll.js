import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const ListAll=()=>{
    const location = useLocation();
    const [wallet, setWallet] = useState(location.state.address);
    const [nftList, setNftList] = useState([]);
    const [modalData, setModalData] = useState(null);

    useEffect(()=>{
        getNFTs();
    },[wallet, modalData])

    const getNFTs=()=>{
        fetch(`https://api.opensea.io/api/v1/assets?owner=${wallet}`)
            .then(res=>res.json())
            .then(res=>{
                setNftList(res.assets)
            })
        .catch(error=>console.log('err', error))
    }
    return(
        <>
            <div className="row mt-3">
                <Link to='/'><p>back to Homepage</p></Link>
                { nftList ? 
                    nftList.map((item, index)=>{
                        return <div className="card col-sm-3 mb-3" key={index}  onClick={()=>setModalData(item)} data-bs-toggle="modal" data-bs-target="#detailsModal">
                            <img src={item.image_url ? item.image_url : 'https://picsum.photos/200'} className="card-img-top" alt="..." />
                            <div className="card-body text-center">
                                <h5 className="card-title">{item.name ? item.name : "No name"}</h5>
                                <p className="card-text text-truncate">{item.description ? item.description : 'No description'}</p>
                                {/* <Link to={item.permalink} target='_blank' className="btn btn-primary">Find in opensea</Link> */}
                                {/* <button type="button" onClick={()=>setModalData(item)} className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#detailsModal">Details</button> */}
                            </div>
                        </div>
                    }) : 'No Record found'
                }
            </div>
            
            <div className="modal fade" id="detailsModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                {modalData ? <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <p>Name: {modalData.name ? modalData.name : "No name"}</p>
                            <p>Id: {modalData.id ? modalData.id : "0"}</p>
                            <p>Owner: {modalData.asset_contract.owner ? modalData.asset_contract.owner : "No Owner"}</p>
                            <p>Schema: {modalData.asset_contract.schema_name ? modalData.asset_contract.schema_name : "No Schema"}</p> 
                            <p>Token_Id: {modalData.token_id ? modalData.token_id : "No token"}</p>
                            <p>Description: {modalData.description ? modalData.description : 'No description'}</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <Link to={modalData.permalink} target='_blank' className="btn btn-primary">Purchase</Link>
                        </div>
                    </div> : ''}

                    
                </div>
                </div>
        </>
        
    )
}

export default ListAll