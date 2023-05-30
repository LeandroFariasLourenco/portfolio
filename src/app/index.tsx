import { useEffect } from "react"

export default function Home() {
  useEffect(() => {
    alert('teste');
  }, []);

  return (
    <>
      Testando
    </>
  )
}