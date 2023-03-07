import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Home=()=>{
    const navigate = useNavigate();
    const[buttonStatus, setButtonStatus] = useState(true);
    const [address, setAddress] = useState('');
    // console.log('env', process.env.REACT_APP_YOUR_API_KEY)
    const nftListHandler=(e)=>{
        e.preventDefault();
        navigate('list', {
            state: {
                address: process.env.REACT_APP_SAMPLE_WALLET,
                name: 'wallet'
            }
        })
    }

    const inputHandler=(e)=>{
        const val= e.target.value;
        setAddress(val);
        
        if(val.length<10) 
            return setButtonStatus(true)
        setButtonStatus(false)
    }

    //Sample id - 0x23581767a106ae21c074b2276d25e5c3e136a68b
    const addressSubmit=(e)=>{
        e.preventDefault();
        navigate('list', {
            state: {
                address: address,
                name: 'wallet'
            }
        })
    }
    return(
        <div className="text-center">
            <h4 className="mt-5">Welcome to React with NFT</h4>
            <p className="mt-3">
                <Link onClick={nftListHandler}>Click here</Link> to see list of sample NFT's
            </p>
            <p>(or)</p>
            <form onSubmit={addressSubmit}>
                <div className="col-sm-4 m-auto">
                    <input type="text" className="form-control" onChange={inputHandler} placeholder="enter your wallet id" required/>
                </div>
                <div className="mt-2"><button type="submit" disabled={buttonStatus} className="btn btn-primary">Go</button> </div>
                </form>
        </div>
    )
}

export default Home