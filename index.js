import app from './app.js';
const PORT = 8002;

app.listen(PORT, () => {
    console.log(`DFSA server is running at http://localhost:${PORT}`);
});
