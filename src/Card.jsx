/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'

function Card({data}) {
  return <>
  
     <div className="col-lg-4">
        <div className="card mb-5 mb-lg-0">
          <div className="card-body">
            <h5 className="card-title text-muted text-uppercase text-center">{data.plan}</h5>
            <h6 className="card-price text-center">${data.price}<span className="period">/month</span></h6>
            <hr/>
            <ul className="fa-ul">
              <li className={data.userEnabler?"":"text-muted"}><span className="fa-li"><i className={data.userEnabler?"fas fa-check":"fas fa-times"}></i></span>{data.plan==="PLUS" || data.plan==="PRO"?<b>{data.user}</b>:data.user}</li>
              <li className={data.storageEnabler?"":"text-muted"}><span className="fa-li"><i className={data.storageEnabler?"fas fa-check":"fas fa-times"}></i></span>{data.Storage}</li>
              <li className={data.publicprojectsEnabler?"":"text-muted"}><span className="fa-li"><i className={data.publicprojectsEnabler?"fas fa-check":"fas fa-times"}></i></span>{data.publicprojects}</li>
              <li className={data.communityaccessEnabler?"":"text-muted"}><span className="fa-li"><i className={data.communityaccessEnabler?"fas fa-check":"fas fa-times"}></i></span>{data.communityaccess}</li>
              <li className={data.privateprojects?"":"text-muted"}><span className="fa-li"><i className={data.privateprojects?"fas fa-check":"fas fa-times"}></i></span>{data.privateprojects}</li>
              <li className={data.supportEnabler?"":"text-muted"}><span className="fa-li"><i className={data.supportEnabler?"fas fa-check":"fas fa-times"}></i></span>{data.support}</li>
              <li className={data.subdomainEnabler?"":"text-muted"}><span className="fa-li"><i className={data.subdomainEnabler?"fas fa-check":"fas fa-times"}></i></span>{data.plan==="PRO"?<strong>Unlimitted </strong>:<></>}{data.subdomain}</li>
              <li className={data.ReportsEnabler?"":"text-muted"}><span className="fa-li"><i className={data.ReportsEnabler?"fas fa-check":"fas fa-times"}></i></span>{data.Reports}</li>
            </ul>
            <div className="d-grid">
              <a href="#" className="btn btn-primary text-uppercase">Button</a>
            </div>
          </div>
        </div>
     </div>
      
   </>

}

  
export default Card