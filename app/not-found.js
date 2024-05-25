"@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { Footer } from "@/components/Footer"

export default function Component() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
      <h1 className="transition-all duration-500 text-[50px] lg:text-[70px] font-bold">۴۰۴</h1>
      <p className="transition-all duration-500 text-[30px] lg:text-[40px]  text-gray-500">متاسفانه این صفحه وجود ندارد</p>

      <p className="transition-all duration-500 text-sm text-gray-500 mt-6 text-[20px] ">
        شما میتوانید به   {" \n        "}
        <Link className="text-blue-500 hover:underline" href="/">
           صفحه اصلی
        </Link> {"\t"}
        بروید
        .{"\n      "}
      </p>
      <Footer></Footer>
    </main>
  )
}