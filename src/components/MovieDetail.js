import { PropTypes } from 'prop-types'

function MovieDetail({title, image, rating, description}) {
	return (
		<>
			<h1>{title}</h1>
			<p>{rating}</p>
			<img src={image} alt={title} />
			<div>{description}</div>
		</>
	)
}

MovieDetail.propTypes = {
	title: PropTypes.string.isRequired,
	image: PropTypes.string.isRequired,
	rating: PropTypes.number.isRequired,
	description: PropTypes.string.isRequired,
}

export default MovieDetail
