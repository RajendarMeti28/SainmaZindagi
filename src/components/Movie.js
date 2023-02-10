const Movie = (props) => {
  const watches = props.watches;
  const likes = props.likes;

  return (
    <div>
      <h2>{props.title}</h2>
      <p>{props.releaseYear}</p>
    </div>
  );
};

export default Movie;
