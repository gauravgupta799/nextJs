import { useRouter } from 'next/router'

const Query = () => {
    const router = useRouter();
    // console.log(router.query.query)
    const { query } = router.query
    return (
        <div>
            <h1> Your Param is. {query}</h1>
        </div>
    )
}

export default Query
