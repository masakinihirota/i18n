import Link from "next/link"

export default function Home() {
  return (
    <main>
      {/* <Link href={`/${lng}/login`}></Link> */}
      <Link href={`/en`}>英語</Link>
      <Link href="/de">ドイツ語</Link>
      <Link href="/ja">日本語</Link>
    </main>
  )
}
