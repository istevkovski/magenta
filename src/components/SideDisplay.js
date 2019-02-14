import React, {Component} from 'react';
import FeatureDisplayCard from './FeatureDisplayCard';

class SideDisplay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            postsPulled: 0
        }
    }

    async componentDidMount() {
        await fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => {
                this.setState({
                    posts: json,
                    postsPulled: 1
                });
                console.log(json);
            });
    }

    render() {
        return (
            <div className="side-display">
                <FeatureDisplayCard className="padding-default" postsPulled={this.state.postsPulled}>
                    <h2 className="margin-default-half-bottom">{this.state.posts.length > 0 ? this.state.posts[0].title : ''}</h2>
                    <p>{this.state.posts.length > 0 ? this.state.posts[0].body : ''}</p>
                </FeatureDisplayCard>

                <FeatureDisplayCard className="padding-default active" postsPulled={this.state.postsPulled}>
                    <h2 className="margin-default-half-bottom">{this.state.posts.length > 0 ? this.state.posts[1].title : ''}</h2>
                    <p>{this.state.posts.length > 0 ? this.state.posts[1].body : ''}</p>
                </FeatureDisplayCard>

                <FeatureDisplayCard className="padding-default" postsPulled={this.state.postsPulled}>
                    <h2 className="margin-default-half-bottom">{this.state.posts.length > 0 ? this.state.posts[2].title : ''}</h2>
                    <p>{this.state.posts.length > 0 ? this.state.posts[2].body : ''}</p>
                </FeatureDisplayCard>
            </div>
        );
    };
}

export default SideDisplay;