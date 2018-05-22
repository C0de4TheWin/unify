import React from "react";
import "./RankingTab.css";
import StarRatingComponent from 'react-star-rating-component';
import API from "../../utils/API";
import AuthService from "../AuthService";

const auth = new AuthService();
 

 

class RankingTab extends React.Component {
    constructor() {
        super();

        this.state = {
            rating: 0,
            rating_half_star: .5,
            rating_empty_initial: 0,
            faculty: 0,
            campusLife: 0,
            security: 0,
            transportation: 0,
            localFood: 0
        };

    }

    onStarClick(nextValue, prevValue, name) {
        this.setState({ rating: nextValue });

        if (name === "faculty") {
            this.setState({ faculty: nextValue });
        }
        else if (name === "campusLife") {
            this.setState({ campusLife: nextValue })
        }

        else if (name === "localFood") {
            this.setState({ localFood: nextValue })
        }

        else if (name === "transportation") {
            this.setState({ transportation: nextValue })
        }

        else if (name === "security") {
            this.setState({ security: nextValue })


        } else { }

    }
    onSubmit(event) {
        event.preventDefault();
        API.saveRating(auth.getProfile().id, this.props.school, this.state.faculty, this.state.localFood, this.state.campusLife, this.state.transportation, this.state.security);
        // fetch('api/learning', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'multipart/form-data',
        //         'Accept': 'application/json'
        //     },
        //     body: JSON.stringify({
        //         security: this.state.security,
        //         faculty: this.state.faculty,
        //         campusLife: this.state.campusLife,
        //         transportation: this.state.transportation,
        //         localFood: this.state.localFood
        //     })
        // })
    }

    // onStarClickHalfStar(nextValue, prevValue, name, e) {
    //     const xPos = (e.pageX - e.currentTarget.getBoundingClientRect().left) / e.currentTarget.offsetWidth;

    //     if (xPos <= 0.5) {
    //         nextValue -= 0.5;
    //     }
    // }

    render() {
         

        return (<div className="card">
            {/* <div>{typeMessage}</div>
            {isAlum ? <div>Alumns only</div> : ''} */}
            <div className="content">

                <div className="tabs-content" data-tabs-content="example-tabs">
                    <div className="tabs-panel is-active" id="panel1">
                        <form>
                            <label htmlFor="ranking"><h3>Rank this School</h3></label>
                            <label htmlFor="faculty">

                                <span>Faculty: </span>
                                <br />

                                <StarRatingComponent
                                    name="faculty"
                                    starCount={5}
                                    value={this.state.faculty}
                                    onStarClick={this.onStarClick.bind(this)}
                                    onStarClickHalfStar={this.onStarClick.bind(this)}
                                    starColor="#1565c0"
                                    renderStarIcon={(index, value) => <span className={(index > value) ? "fa fa-star" : "fa fa-star checked"}></span>}
                                    emptyStarColor="#868889"

                                />
                            </label>
                            <label htmlFor="campusLife">

                                <span> Campus Life: </span>
                                <br />

                                <StarRatingComponent
                                    name="campusLife"
                                    starCount={5}
                                    value={this.state.campusLife}
                                    onStarClick={this.onStarClick.bind(this)}
                                    onStarClickHalfStar={this.onStarClick.bind(this)}
                                    starColor="#1565c0"
                                    renderStarIcon={(index, value) => <span className={(index > value) ? "fa fa-star" : "fa fa-star checked"}></span>}
                                    emptyStarColor="#868889"
                                />
                            </label>

                            <label htmlFor="localFood">
                                <span> Local Food: </span>
                                <br />

                                <StarRatingComponent
                                    name="localFood"
                                    starCount={5}
                                    value={this.state.localFood}
                                    onStarClick={this.onStarClick.bind(this)}
                                    onStarClickHalfStar={this.onStarClick.bind(this)}
                                    starColor="#1565c0"
                                    renderStarIcon={(index, value) => <span className={(index > value) ? "fa fa-star" : "fa fa-star checked"}></span>}
                                    emptyStarColor="#868889"
                                />
                            </label>

                            <label htmlFor="transportation">

                                <span> Transportation: </span>
                                <br />

                                <StarRatingComponent
                                    name="transportation"
                                    starCount={5}
                                    value={this.state.transportation}
                                    onStarClick={this.onStarClick.bind(this)}
                                    onStarClickHalfStar={this.onStarClick.bind(this)}
                                    starColor="#1565c0"
                                    renderStarIcon={(index, value) => <span className={(index > value) ? "fa fa-star" : "fa fa-star checked"}></span>}
                                    emptyStarColor="#868889"
                                />
                            </label>

                            <label htmlFor="security">

                                <span> Security: </span>
                                <br />

                                <StarRatingComponent
                                    name="security"
                                    starCount={5}
                                    value={this.state.security}
                                    onStarClick={this.onStarClick.bind(this)}
                                    onStarClickHalfStar={this.onStarClick.bind(this)}
                                    starColor="#1565c0"
                                    renderStarIcon={(index, value) => <span className={(index > value) ? "fa fa-star" : "fa fa-star checked"}></span>}
                                    emptyStarColor="#868889"
                                />
                            </label>
                            <input type="submit" id="submit" value="submit" onClick={this.onSubmit.bind(this)} />
                        </form>
                    </div>
                </div>
            </div>
        </div>

        )


    }
}

export default RankingTab;
