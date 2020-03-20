import React, { Component } from 'react';
import { connect } from 'react-redux';

import { createPost, showAlert } from '../../redux/actions';
import Alert from '../alert/alert';

class FormAddPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      text: ''
    };
  }

  submitHandler = event => {
    event.preventDefault();
    const { title, text } = this.state;

    if (!title.trim()) {
      this.props.showAlert({
        color: 'warning',
        text: 'Please, enter title post'
      });
      return;
    }

    this.props.createPost({
      title,
      text,
      id: Date.now().toString()
    });

    this.setState({ title: '', text: '' });
  };

  changeInputHandler = event => {
    event.persist();
    this.setState(prev => ({
      ...prev,
      ...{ [event.target.name]: event.target.value }
    }));
  };

  render() {
    return (
      <div>
        {this.props.alert && <Alert alert={this.props.alert} />}

        <form onSubmit={this.submitHandler}>
          <div className="form-group">
            <label htmlFor="title">Title post</label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              placeholder="Enter title post"
              value={this.state.title}
              onChange={this.changeInputHandler}
            />
          </div>
          <div className="form-group">
            <label htmlFor="text">Text in post</label>
            <input
              type="text"
              className="form-control"
              id="text"
              name="text"
              placeholder="Enter text in post"
              value={this.state.text}
              onChange={this.changeInputHandler}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Send post
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  alert: state.app.alert
});

const mapDispatchToProps = {
  createPost,
  showAlert
};

export default connect(mapStateToProps, mapDispatchToProps)(FormAddPost);
