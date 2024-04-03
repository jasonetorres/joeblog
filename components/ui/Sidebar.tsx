import React from 'react'
import { sidebarLinks } from '@/constants'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { cn } from '@/lib/utils'

const Sidebar = () => {
  const pathname = usePathname
  return (
    <section className='sticky left-0 top-0 flex h-screen w-fit
    flex-col justify-between bg-dark-1 p-6 pt-28 text-white max-sm:hidden lg:w-[200px]'>
      <div className='flex flex- flex-col gap-6'>
        {sidebarLinks.map ((link) => {
          const isActive = pathname === link.route || pathname.startsWith(link.route);

          return (
            <Link
             href={link.route}
             key={link.label}
             className={cn}>
            </Link>
          ) 
        })}
      </div>
    </section>
  )
}

export default Sidebar