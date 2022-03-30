// implement AddMovie component here
// https://pt-br.reactjs.org/docs/uncontrolled-components.html
import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit = (event) => {
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
    event.preventDefault();
  }

  // baseado no codigo de Pedro Verano
  inputFunc = (datatest, name, type, value) => (<input
    data-testid={ datatest }
    name={ name }
    type={ type }
    value={ value }
    onChange={ this.handleChange }
  />);

  // baseado no codigo de Pedro Verano
  textAreaFunc = (datatest, name, value) => (<textarea
    data-testid={ datatest }
    name={ name }
    value={ value }
    onChange={ this.handleChange }
  />);

  // baseado no codigo de Pedro Verano e aluno Josue Lobo me auxiliu com erro de nome de func
  render() {
    const { onClick } = this.props;
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form" onSubmit={ this.handleSubmit }>
        <label data-testid="title-input-label" htmlFor="title">
          Título
          {this.inputFunc('title-input', 'title', 'text', title)}
        </label>
        <label data-testid="subtitle-input-label" htmlFor="subtitle">
          Subtítulo
          {this.inputFunc('subtitle-input', 'subtitle', 'text', subtitle)}
        </label>
        <label data-testid="image-input-label" htmlFor="imagePath">
          Imagem
          {this.inputFunc('image-input', 'imagePath', 'text', imagePath)}
        </label>
        <label data-testid="storyline-input-label" htmlFor="storyline">
          Sinopse
          {this.textAreaFunc('storyline-input', 'storyline', storyline)}
        </label>
        <label data-testid="rating-input-label" htmlFor="rating">
          Avaliação
          {this.createInput('rating-input', 'rating', 'number', rating)}
        </label>
        <label data-testid="genre-input-label" htmlFor="genre">
          Gênero
          <select
            data-testid="genre-input"
            name="genre"
            value={ genre }
            onChange={ this.handleChange }
          >
            <option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
          </select>
        </label>
        <button
          type="submit"
          data-testid="send-button"
          onClick={ onClick }
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
