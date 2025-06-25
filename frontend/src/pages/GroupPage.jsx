import { useParams, Link } from "react-router";

function GroupPage() {

    const params = useParams();

    return(
        <>
            <h1>{params.id}</h1>
            <Link to='/'>Go Home</Link>
        </>
    );
}

export default GroupPage;