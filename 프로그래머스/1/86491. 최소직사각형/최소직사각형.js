function solution(sizes) {
    for (let i = 0; i < sizes.length; i++) {
        const [w, h] = sizes[i];
        sizes[i] = w < h ? [h, w] : [w, h];
    }
    const maxWidth = Math.max(...sizes.map(([w, _]) => w));
    const maxHeight = Math.max(...sizes.map(([_, h]) => h));

    return maxWidth * maxHeight;
}