import { faBars, faHouse } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"


import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

export default function Nav() {
  return (
    <div className="fixed w-full flex justify-between place-items-center p-8">
        <Link href={'/'}>
        <img src="Next Level (text only).png" alt="Next Level Logo" className="h-auto w-54 object-contain"/>
        </Link>
        <div className="flex justify-end place-items-center text-4xl gap-8">
            <Link href={'/fksjf'} className=" bg-white px-4 py-2 text-xl rounded-xl font-semibold">Free Consultation</Link>
            <FontAwesomeIcon icon={faBars}/>
        </div>
    </div>
  )
}
