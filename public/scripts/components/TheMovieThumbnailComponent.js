export default {
    name: "TheMovieThumbnail",
    props: ["movie"],
    template: `
    <div class="movie-thumb">
        <img :src='"images/" + movie.movies_cover' alt="movie thumbnail">
    </div>
    `,
}