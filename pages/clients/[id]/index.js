import {useRouter} from 'next/router'

function ClientProjectsPage() {

    const router = useRouter();
    console.log(router.query)

    function loadProjectHanlder() {
        router.push({
            pathname: '/client/[id]/[clientprojectid]',
            query: {id: 'max', clientprojectid: 'projecta'}
        })
    }

    return <div>
        <h1>The Projects of a Given Clien</h1>
        <button onClick={loadProjectHanlder} >Load Project A</button>
    </div>
}

export default ClientProjectsPage;