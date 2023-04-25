import {useRouter} from 'next/router'

function PortfolioProjectPage() {

    const router = useRouter()
   
    //lo de abajo me permite acceder a la url y luego manipularla
    console.log(router.pathname)
   console.log(router.query)


    return (
        <div>
            <h1>The Portfolio Page</h1>
        </div>
    )
}

export default PortfolioProjectPage;