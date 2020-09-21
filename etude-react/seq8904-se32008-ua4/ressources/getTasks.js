getTasks() {
    // We're using axios instead of Fetch
    axios
        // The API we're requesting data from
        .get("http://jsonplaceholder.typicode.com/todos/?userId=1")
        // Once we get a response, we'll map the API endpoints to our props
        .then(response => {
            console.log(response);
            this.setState({
                tasks: response.data,
                isLoading: false
            });
            response.data.results.map(task => ({
                id: `${task.id.first} ${task.id.last}`,
                title: `${task.title}`,
                completed: `${task.completed}`
            }))
        }
        )

        // We can still use the `.catch()` method since axios is promise-based
        .catch(error => this.setState({ error, isLoading: false }));
}
componentDidMount() {
    console.log('Hello')
    this.getTasks();
}