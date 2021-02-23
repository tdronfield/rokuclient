export default {
    name: "TheMovieThumbnail",
    props: ["movie"],
    template: `
    <div>
        <img :src='"images/" + movie.movies_cover' alt="movie thumbnail">
    </div>
    `
}