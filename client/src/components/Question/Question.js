import React, { Component } from "react";
import AuthService from "../AuthService";
import Answer from "../Answer/Answer";
//import AskQuestion from "../AskQuestion/AskQuestion";
import AnswerQuestion from "../AnswerQuestion/AnswerQuestion";

const auth = new AuthService();

class Question extends Component {

  render(){
    return(
        <div> 
          {
            auth.getProfile().type === "prospect" ? 
            <div>
              {
                this.props.questions.map(
                  question => 
                  <div className="card"> 
                    <div className="card-divider"> 
                      <p><b>{question.User.username}</b> asked on {question.createdAt}</p>
                    </div>
                    <div className="card-section">
                      <p>{question.question}</p> 
                    </div>
                    <div className="card-divider">
                      <Answer answers={question.Answers}/>
                    </div>
                  </div>
                )
              }
              </div> : <div>
              {
                this.props.questions.map(
                  question => 
                  <div className="card">
                    <div className="card-divider"> 
                      <p><b>{question.User.username}</b> asked on {question.createdAt}</p>
                    </div>
                    <div className="card-section">
                      <p>{question.question}</p>
                    </div>
                    <div className="card-divider">
                      <Answer answers={question.Answers}/>
                    </div>
                    <div className="card-divider">
                      <AnswerQuestion questionId={question.id}userId={this.props.userId} collegeId={this.props.collegeId}/>
                    </div>
                  </div>
                )
              } 
          </div>
          } 
        </div>
    )
  }
}

export default Question;