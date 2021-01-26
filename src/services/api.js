export const savePost = async (props) => {
    return await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: props.title,
            body: props.message,
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => console.log(json));
}

export const deletePost = async (props) => {
    return await fetch('https://jsonplaceholder.typicode.com/posts/' + props?.id, {
        method: 'DELETE',
    });
}
