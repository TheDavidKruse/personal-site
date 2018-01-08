import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Col } from 'reactstrap';
  import './repo.css'

const Repo = (props) => {
    const repo = props.repoInfo
    console.log(repo)
  return (
    <Col sm='3'>
      <Card id='cards'>
        <a href={repo.svn_url} target='_blank'><CardImg top src="https://pbs.twimg.com/profile_images/616309728688238592/pBeeJQDQ.png" alt="Card image cap" /></a>
        <CardBody>
          <CardTitle>{repo.name}</CardTitle>
          <CardText>
          {repo.description}         
          </CardText>
          <hr/>
          <p>forks: {repo.forks || 0}</p>
          <p>stars: {repo.stargazers_count || 0}</p>
          <p>language used: {repo.language || 'None'}</p>
        </CardBody>
      </Card>
    </Col>

  );
};

export default Repo;