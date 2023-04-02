import { useState, useEffect } from "react"
import Movie from "../components/Movie"


function Home() {
	const [loading, setLoading] = useState(true)
	const [movies, setMovies] = useState([])
	const getMovies = async() => {
		// const response = await fetch(
		// 	`https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`
		// )
		// const json = await response.json()

		const json = await (await fetch(
				`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
			)).json()
		setMovies(json.data.movies)
		setLoading(false)
	}
	console.log(movies)
	useEffect(() => {
		getMovies()
	}, [])

	return (
		<>
			{loading ? (
				<h1>Loading...</h1>
			) : (
				<ul>
					{movies.map(movie => (
						<Movie
							key={movie.id}
							id={movie.id}
							title={movie.title} 
							rating={movie.rating}
							image={movie.medium_cover_image}
							summary={movie.summary}
							genres={movie.genres}
						/>
					))}
				</ul>
			)}	
		</>
	)
}

export default Home