import React, {Component} from 'react';

class App extends Component {

    state={
        tasks:[]
    }

    inputTask = React.createRef()

    componentDidMount() {
        this.inputTask.current.focus()
    }

    addTasks=()=>{
        let newTasks = this.state.tasks

        newTasks.push(this.inputTask.current.value)

        this.setState({
            tasks:newTasks,
        })

        this.inputTask.current.value = ''
    }

    deleteClicked=(index)=>{
        let removeTask = this.state.tasks
        removeTask.splice(index, 1)

        this.setState({
            tasks:removeTask
        })
    }

    render() {

        const {tasks} = this.state

        return (
            <div className={'container'}>
                <div className="row">
                    <div className="col-md-6 offset-3 mt-3">
                        <h1 className={'text-info'}>To Do Mini App</h1>

                        <div className="row">
                            <div className="col-md-9">
                                <input type="text" ref={this.inputTask} className={'form-control'}/>
                            </div>
                            <div className="col-md-3">
                                <button className={'btn btn-info'} onClick={this.addTasks}>Add Tasks</button>
                            </div>
                        </div>

                        <hr/>
                        {
                            tasks.map((item, index)=>{
                                return <div  className={'row border border-info rounded mb-3'} style={{display:"flex", padding:'5px', paddingLeft:'5px'}} key={index}>
                                    <div className="col-md-9 ">
                                        <p>{item}</p>
                                    </div>
                                    <div className="col-md-3">
                                        <button className="btn btn-danger" onClick={()=>this.deleteClicked(index)}>Delete</button>
                                    </div>
                                </div>
                            })
                        }
                    </div>
                </div>

            </div>
        );
    }
}

export default App;