const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: 'dab9d62b867b20c4fefd9025d72b7447',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;