export default async function getFlaskData(){
    const res = await fetch("http://127.0.0.1:5000")
    if(res.status === 200){
        const text = await res.text()
        return text
    }
    throw new Error("Failed to fetch data")
}