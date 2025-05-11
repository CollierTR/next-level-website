import { faBars, faHouse } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"


import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

export default function Nav() {
  return (
    <div className="fixed w-full flex justify-between place-items-center p-6 md:p-8">

        <Link href={'/'} className="hidden md:visible">
        <img src="Next Level (text only).png" alt="Next Level Logo" className="h-auto w-54 object-contain"/>
        </Link>

        <div className="flex justify-end place-items-center text-4xl gap-8 w-full md:w-fit">
            <Link href={'/fksjf'} className=" bg-white px-4 py-2 text-xl rounded-xl font-semibold hidden md:visible">Free Consultation</Link>
            <FontAwesomeIcon icon={faBars}/>
        </div>
    </div>
  )
}
