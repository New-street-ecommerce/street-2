"use client"
import Image from "next/image"
import Link from "next/link"
import art from "../../../assets/art.jpg"

const signGeneral = () => {
return (
    <div className="w-full flex-col">
        <div>
            <Image
            src={art}
            width={300}
            height={300}
            priority={false}
            alt=''></Image>
            <Link href="signUpA"></Link>
        </div>
        <div>
        <Link href="signUpA">
               ARTIST
        </Link>
        {" "}
        <Link href="signUp">
               USER
        </Link>
        </div>
    </div>
)
}

export default signGeneral