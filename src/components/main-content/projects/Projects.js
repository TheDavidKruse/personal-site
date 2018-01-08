import React, { Component } from 'react';
import { Input, Row } from 'reactstrap';
import Repo from './Repo';
import Loading from '../loading/Loading'
import './projects.css';


class Projects extends Component {
    constructor(){
        super();

        this.state = {
            projects: [],
            filter: '',
            filterBy: 'name',
        }
    }

    componentDidMount(){
        const getRepos = async () => {
            const response = await fetch(`https://api.github.com/users/thedavidkruse/repos`)

            const repos = await response.json();
            let filteredRepos = repos.filter((e) => {
                return e.private === false
            })
            this.setState({projects: repos})
        }
        getRepos();
        console.log('this.state', this.state)
    }

    // shouldComponentUpdate(nextProps, nextState){
    //     console.log(this.state, nextState)
    //    return this.state.projects.length !== nextState.projects.length ? true : false;
    // }

    handleFilterName(e){
        console.log(e.target.value)
        this.setState({filter: e.target.value})
    }

  render () {
      let mappedRepos = this.state.projects
      .filter((e,i,a) => {
           return e[this.state.filterBy].toLowerCase().includes(this.state.filter.toLocaleLowerCase())
        })
        .map((repo, index) => <Repo key={index} repoInfo={repo}/>)
      if(this.state.projects.length > 0){
        return (
            <div>
                <div>
                    <Input onChange={this.handleFilterName.bind(this)}/>
                </div>
                <Row >
                    {mappedRepos}
                </Row>

            </div>
          )
      } else {
          return (
              <div>
                  <Loading/>
              </div>
          )
      }
  }
}

export default Projects;