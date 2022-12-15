import React from 'react';
import ReactDOM from 'react-dom';


function Greetings(){
return (
<div>
  <h4 align="Center"> Generic Data validation App</h4>
  <ul>
    <li>
      <a href="#">Teradata</a>
    </li>
    <li>
      <a href="#">Cloud S3 Bucket</a>
    </li>
    <li>
      <a href="#">Snowflake Stages</a>
    </li>
  </ul>

</div>
);

}


ReactDOM.render( <Greetings />, document.getElementById('root'));