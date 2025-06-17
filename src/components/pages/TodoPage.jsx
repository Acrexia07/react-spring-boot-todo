import './TodoPage.css'

function TodoPage () {

    const today = new Date ()
    const targetDate = new Date(today.getFullYear()+12, today.getMonth(), today.getDay())

    const todoList = [
                        {id: 1, description: 'Learn AWS', done: true, targetDate:targetDate},
                        {id: 2, description: 'Learn GCP', done: true, targetDate:targetDate},
                        {id: 3, description: 'Learn Docker', done: false, targetDate:targetDate},
                ]


    return(
        <div className="container">
            <h1>Things you want to do!</h1>
            <table className="table">
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>Description</td>
                        <td>Is Done?</td>
                        <td>Target Date</td>
                    </tr>
                </thead>
                <tbody>
                    {M
                        todoList.map (
                            todo => (
                                <tr key={todo.id}>
                                    <td>{todo.id}</td>
                                    <td>{todo.description}</td>
                                    <td>{todo.done.toString()}</td>
                                    <td>{todo.targetDate.toDateString()}</td>
                                </tr>
                            )
                        )
                    }

                </tbody>
            </table>
        </div>
    )
}

export default TodoPage;