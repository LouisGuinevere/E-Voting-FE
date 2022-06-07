import React from 'react'
import Proposal from './Proposal'
import polls from "./data"
import "./styles.css"

const Proposals = () => {
    return (
        <div className="proposals-container">
            {
                polls.map((item, i) => <Proposal data={item} key={i}/>)
            }
        </div>
    )
}

export default Proposals