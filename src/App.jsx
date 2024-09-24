/* eslint-disable no-unused-vars */
import React from 'react'
import Card from './Card'

function App() {
    
  let data = [
    {
      plan:"FREE",
      price:"0",
      user:"single user",
         userEnabler:true,
      Storage:"5GB storage",
         storageEnabler:true,
      publicprojects:"unlimited public projects",
         publicprojectsEnabler:true, 
      communityaccess:"community access",
         communityaccessEnabler:true,
      privateprojects:"unlimited private projects",
         privateprojectsEnabler:false, 
      support:"Dedicated Phone Support",
         supportEnabler:false,
      subdomain:"Free Subdomains",
         subdomainEnabler:false,
      Reports:"Monthly Status Reports",
         ReportsEnabler:false,
    },
    {
      plan:"PLUS",
      price:"9",
      user:"5 user",
         userEnabler:true,
      Storage:"50GB storage",
         storageEnabler:true,
      publicprojects:"unlimited public projects",
         publicprojectsEnabler:true,
      communityaccess:"community access",
         communityaccessEnabler:true,
      privateprojects:"unlimited private projects",
         privateprojectsEnabler:true,
      support:"Dedicated Phone Support",
         supportEnabler:true,
      subdomain:"Free Subdomains",
         subdomainEnabler:true,
      Reports:"Monthly Status Reports",
         ReportsEnabler:false,

    },
    {
      plan:"PRO",
      price:"49",
      user:"Unlimited user",
          userEnabler:true,
      Storage:"150GB storage",
          storageEnabler:true,
      publicprojects:"unlimited public projects",
          publicprojectsEnabler:true,
      communityaccess:"community access",
          communityaccessEnabler:true,
      privateprojects:"unlimited private projects",
          privateprojectsEnabler:true,
      support:"Dedicated Phone Support",
          supportEnabler:true,
      subdomain:"Free Subdomains",
          subdomainEnabler:true,
      Reports:"Monthly Status Reports",
          ReportsEnabler:true,
    },
  ]

  return <>
  
      <section className="pricing py-5">
  <div className="container">
    <div className="row">
       {
        data.map((e,i)=>{
           return <Card data={e} key= {i} />
        })
       }
      

    </div>
  </div>
</section>
  </>
}

export default App