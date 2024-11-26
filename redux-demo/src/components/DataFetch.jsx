import { useEffect, useState } from "react";

export default function DataFetch() {

    const [post, setPost] = useState([]); // array of post
    const [isLoading, setIsLoading] = useState(false); // boolean to check loading
    const [error, setError] = useState(null); // error object
    // interface PostT{
    //     id: number;
    //     title: string;
    //     body: string;
    //     userId: number;
    // }


    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true);
                const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
                const data = await response.json();
                setPost(data);
                setIsLoading(false);

            } catch (error) {
                setError(error);
            }
        }
        fetchData();
    }, []);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div>
            <h1>Data Fetch</h1>
            {/* fetch data from api */}
            {post.map((post) => (
                <div key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                </div>
            ))}

        </div>
    );
}