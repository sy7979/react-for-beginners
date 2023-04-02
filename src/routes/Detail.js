import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import MovieDetail from '../components/MovieDetail'

function Detail() {
	const {id} = useParams()
	const [loading, setLoading] = useState(true)
	const [movie, setMovie] = useState({})
	const getMovie = async () => {
		const json = await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json()
		console.log(json)
		setMovie(json.data.movie)
		setLoading(false)
	}
	useEffect(() => {
		const json = getMovie()
	}, [])
	return (
		<>
			<h1>Detail</h1>
			{loading ? <h2>Loading...</h2> : <MovieDetail title={movie.title} image={movie.medium_cover_image} rating={movie.rating} description={movie.description_full}/>}
			<div></div>
		</>
	)
}

export default Detail