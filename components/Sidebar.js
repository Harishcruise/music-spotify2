import {HomeIcon,SearchIcon,LibraryIcon,PlusCircleIcon, HeartIcon, RssIcon} from '@heroicons/react/outline'
import { signOut, useSession } from 'next-auth/react'
function Sidebar() {
  const {data:session , status} = useSession();
  console.log(session);
  return (
    <div className='text-gray-500 p-5 text-sm border-r border-gray-900'>
        <div className=''>
            <button className='flex items-center space-x-2 hover:text-white pb-2' onClick={()=>signOut()}>
            <p>Log Out</p>
            </button>
            <button className='flex items-center space-x-2 hover:text-white pb-2' >
            <HomeIcon className='h-5 w-5' />
            <p>Home</p>
            </button>
            <button className='flex items-center space-x-2 hover:text-white pb-2'>
            <SearchIcon className='h-5 w-5' />
            <p>Search</p>
            </button>
            <button className='flex items-center space-x-2 hover:text-white pb-2'>
            <LibraryIcon className='h-5 w-5' />
            <p>Your Library</p>
            </button>
            <hr className='border-t-[0.1px] border-gray-900 pb-2' />
            <button className='flex items-center space-x-2 hover:text-white pb-2'>
            <PlusCircleIcon className='h-5 w-5' />
            <p>Create Playlist</p>
            </button>
            <button className='flex items-center space-x-2 hover:text-white pb-2'>
            <HeartIcon className='h-5 w-5' />
            <p>Liked Songs</p>
            </button>
            <button className='flex items-center space-x-2 hover:text-white pb-2'>
            <RssIcon className='h-5 w-5' />
            <p>Your Episodes</p>
            </button>
            <hr className='border-t-[0.1px] border-gray-900 pb-2' />
            {/*Playlist section*/}
            <p className='cursor-pointer hover:text-white pb-2'>Playlist Name...</p>
            <p className='cursor-pointer hover:text-white pb-2'>Playlist Name...</p>
            <p className='cursor-pointer hover:text-white pb-2'>Playlist Name...</p>
            <p className='cursor-pointer hover:text-white pb-2'>Playlist Name...</p>
            <p className='cursor-pointer hover:text-white pb-2'>Playlist Name...</p>
            <p className='cursor-pointer hover:text-white pb-2'>Playlist Name...</p>
            <p className='cursor-pointer hover:text-white pb-2'>Playlist Name...</p>
            <p className='cursor-pointer hover:text-white pb-2'>Playlist Name...</p>
            <p className='cursor-pointer hover:text-white pb-2'>Playlist Name...</p>
            <p className='cursor-pointer hover:text-white pb-2'>Playlist Name...</p>
        </div>
    </div>
  )
}

export default Sidebar