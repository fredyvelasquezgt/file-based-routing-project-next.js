import Link from 'next/link'

function ClientsPage() {

    const clients = [{id: 'max', name:'Maximilian'},
                    {id: 'manu', name: 'Manuel'}]

    return <div>
        <h1>The Clientes Page</h1>
        <ul>
            <li>
                <Link href='/clients/max'>Maximilian</Link>
            </li>
            <li>
                <Link href='/clients/manu'>Manuel</Link>
            </li>

            {clients.map(client => <li key={client.id}>
                <Link href={{
                    pathname: '/client/[id]',
                    query: {id:client.id}
                }} > 
                {client.name}
                </Link>
            </li>)}

        </ul>
    </div>
}

export default ClientsPage;