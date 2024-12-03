// components/Posts.js

const Posts = () => {
    const data = [
        { id: 1, content: 'Just finished a project!', date: '2 hours ago' },
        { id: 2, content: 'Looking for a new opportunity.', date: '1 day ago' },
    ];


    return (
        <div className="mt-4">
            <h3 className="text-lg font-bold">Activity</h3>
            {data && data.map((post) => (
                <div key={post.id} className="card bg-base-100 shadow-lg mt-4">
                    <div className="card-body">
                        <p>{post.content}</p>
                        <p className="text-sm text-gray-500">{post.date}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Posts;

