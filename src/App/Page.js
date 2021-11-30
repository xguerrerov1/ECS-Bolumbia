import React from 'react';

const Page = ({}) => <h2>This is Home</h2>

function Comment(props) {
    return (
      <div className="Comment">
        <div className="UserInfo">
          <Avatar user={props.author} />
          <div className="UserInfo-name">
            {props.author.name}
          </div>
        </div>
        <div className="Comment-text">
          {props.text}
        </div>
        <div className="Comment-date">
          {formatDate(props.date)}
        </div>
        <div>
                    <a href="./Register">
                    <button>Atras</button>
                        </a>
        </div>
      </div>
      
    );
  }

export default Page;