import React from 'react'
import "./styles.css"

const Proposal = (data) => {
    // const {title, status, duration} = data;
    return (
        <div className="proposal-container">
            <p className="proposal-title">{data.data.title}</p>
            <p className="proposal-description">{data.data.description}</p>
            <div className="proposal-additional-info vertical-flex-box">
                <p className="proposal-status">{data.data.status ? "ACTIVE" : "CLOSED"}</p>
                <p className="proposal-duration"><i class="fa fa-clock-o"></i>&nbsp;Duration: {data.data.duration} days</p>
            </div>
        </div>
    )
}

export default Proposal