import {getProviders, signIn} from 'next-auth/react'

function Login({providers}) {
  return (
    <div className='flex flex-col items-center bg-black min-h-screen w-full justify-center'>
        <img className='w-52 mb-5' src="https://links.papareact.com/9xl" alt="" />

        {/* {Object.values(providers).map((provider)=>{
            <div>
              <button>Login With {provider?.name}</button>
            </div>
        })} */}
        <div>
          <button className='bg-[#18D860] text-white p-3 rounded-full hover:text-xl hover:text-zinc-900 hover:ease-in-out' 
          onClick={()=>signIn(providers.spotify.id,{
            callbackUrl:"/"
          })}>Login With {providers.spotify.name}</button>
        </div>
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