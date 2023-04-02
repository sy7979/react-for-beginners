import { PropTypes } from 'prop-types'
import { Link } from 'react-router-dom'

function Movie({id, title, rating, image, summary, genres}) {
	return (
		<>
			<li>
				<Link to={`/movie/${id}`}>
					<h2> {title} <span>({rating})</span></h2>
				</Link>
				
				<img src={image} alt={title} />
				<p>{summary}</p>
				<ul>
					{genres.map((g) => (
						<li key={g}>{g}</li>
					))}
				</ul>
			</li>
		</>
	)
}

Movie.propTypes = {
	id: PropTypes.number.isRequired,
	title: PropTypes.string.isRequired,
	rating: PropTypes.number.isRequired,
	image: PropTypes.string.isRequired,
	summary: PropTypes.string.isRequired,
	genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Movie