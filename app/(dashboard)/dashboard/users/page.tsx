import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
      <h1>users</h1>
      <ul className='mt-10'>
        <Link href='/dashboard/users/1'>User 1</Link>
        <Link href='/dashboard/users/2'>User 2</Link>
        <Link href='/dashboard/users/3'>User 3</Link>
        <Link href='/dashboard/users/4'>User 4</Link>
      </ul>
    </div>
  )
}

export default page
