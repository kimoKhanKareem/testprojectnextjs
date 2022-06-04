import Link from 'next/link'
import styled from 'styled-components'

const NavBar = () => {
    return (
        <DivStyled>
            <ul className='d-flex'>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    {/* <Link href="/about">about</Link> */}
                </li>
                <li>
                    <Link href="/cart">cart</Link>
                </li>
                <li>
                    <Link href="/kimo">kimo</Link>
                </li>

            </ul>
        </DivStyled>
    )
}
//styled components
const DivStyled = styled.div`
    
`
export default NavBar