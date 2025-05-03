import { faBars, faHouse } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"

import { Button } from "./ui/button"

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

export default function Nav() {
  return (
    <div className="fixed w-full flex justify-between place-items-center p-6">
        <Link href={'/'}>
        <img src="Next Level (text only).png" alt="Next Level Logo" className="h-auto w-40 object-contain"/>
        </Link>
        <div className="flex justify-end place-items-center text-3xl gap-6">
            <Button className='hidden sm:block' variant="outline" asChild><Link href={'/fksjf'}>Free Consultation</Link></Button>
            <FontAwesomeIcon icon={faBars}/>
        </div>
    </div>
  )
}
