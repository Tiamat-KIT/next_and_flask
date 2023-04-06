import { Example } from "@/Component/JestExample"
import SeoComponent from "@/Component/SEO/SEO"
import { Page } from "@/stories/Page"
import { Metadata } from "next"
import dynamic from "next/dynamic"
import { Suspense } from "react"
import getFlaskData from "@/Component/fetchFlask"

export async function generateMetadata(): Promise<Metadata>{
    const title = ""
    return SeoComponent({
      title: title,
      description: title,
      url: `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/`,
      imageUrl: `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/api/og?title=${title}`
    }
  )
}

/* export const revalidate = 0; */ 

export default async function Home(){
  const data = await getFlaskData()
  return (
    <div>
      <h1 className="text-3xl">Template!</h1>
      <Example />
      <p>{data}</p>
    </div>
  )
}