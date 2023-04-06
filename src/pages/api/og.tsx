import { ImageResponse,unstable_createNodejsStream } from "@vercel/og";
import { NextRequest } from "next/server";

export const config = {
  runtime: 'edge',
};

export default function (req:NextRequest){
    try{
      const { searchParams } = new URL(req.url)

      // ?title=<title>
      const hasTitle = searchParams.has("title")
      const title = hasTitle 
        ? searchParams.get("title")?.slice(0,100)
        : "My default title"
      
        return new ImageResponse(
          (
            <div
              style={{
                fontSize: 128,
                width: '100%',
                height: '100%',
                textAlign: 'center',
                alignItems: 'center',
                justifyContent: 'center',
                borderWidth: "30px"
              }}
              tw="flex bg-indigo-300"
            >
              <div tw="bg-indigo-100 flex justify-center" style={{width: "95%",height:"95%"}} >
                <p tw="text-justify flex">{title}</p>
              </div>
            </div>
          ),
          {
            width: 1200,
            height: 600,
          },
        );
    }catch(e:any){
      console.log(`${e.massage}`)
      return new Response(`Failed to generate the image`, {
        status: 500,
    });
  }
}