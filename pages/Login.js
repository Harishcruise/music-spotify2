import React from 'react'

function Login({providers}) {
  return (
    <div>
        <h1>This Login Page</h1>
    </div>
  )
}

export default Login

export async function getServerSideProps(){
  const providers = await getProviders();
  return{
     props:{
       providers
     }
  }
}