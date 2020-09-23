export const processImage= (data) => {
    const imgUrl =data && data.replace('uploads', '');
    return `https://mobileshop.hungvu.net/${imgUrl}`;
}