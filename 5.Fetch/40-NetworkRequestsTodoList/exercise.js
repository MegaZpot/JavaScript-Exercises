const retrieveTodos = async () => {
    const apiUrl = 'https://jsonplaceholder.typicode.com/todos';
    try{
        const response = await fetch(apiUrl);
        if(!response.ok) {
            throw new Error('Error: Wrong URL')
        }
        const todos = await response.json();
        console.log("Todos:",todos);
    } catch (error) {
        console.error('Fetch error:',error.message);
    }
}

retrieveTodos();