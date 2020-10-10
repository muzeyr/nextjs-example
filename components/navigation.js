import Link from "next/link"

function Navigation(){

return <nav>
<Link href="/">
    <a href="#">Home</a>
</Link>
<Link href="/about">
    <a href="#">About Us</a>
</Link>
<Link href="/contact">
    <a href="#">Contact</a>
</Link>
</nav>
    
}
export default Navigation