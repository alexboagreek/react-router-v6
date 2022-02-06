import { useState, useEffect } from 'react';
import { Link } from 'rect-router-dom';


const Blogpage = () => {
    const [posts, setPost] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => setPost(data))
    }, []);
    return (

        <div>
            <h1>Our news</h1>
            {
                posts.map(post => (
                    <Link key={post.id} to={`/posts/${post.id}`}>
                    
                    <li>{ post.title }</li>
                    
                    </Link>
                ))
            }
        </div>
    )

}

export { Blogpage };