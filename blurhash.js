import { encode, isBlurhashValid } from "blurhash";
import canvas from 'canvas';
const { createCanvas, loadImage, Image } = canvas;

import { encode, isBlurhashValid } from "blurhash";
import { createCanvas, loadImage, Image } from 'canvas'

const getImageData = (image) => {
    const canvas = createCanvas(image.width, image.height)
    const context = canvas.getContext('2d')
    context.drawImage(image, 0, 0)
    return context.getImageData(0, 0, image.width, image.height)
}

export const encodeImageToBlurhash = async (
    imageUrl
) => {
    const image = await loadImage(imageUrl)
    const imageData = getImageData(image)
    let blurImage = encode(
        imageData.data,
        imageData.width,
        imageData.height,
        4,
        4)
    const validRes = isBlurhashValid(blurImage);
    return blurImage
};