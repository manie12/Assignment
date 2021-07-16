
import postSchema from '../../Model/GetImage.js';
import { encodeImage } from '../../blurhash.js';

export const postQuery = {

    Query: {


        async posts() {

            try {
                const { url } = await postSchema.find();
                const { blurImage } = encodeImageToBlurhash(url);
                return {
                    blurhash: blurImage
                };
            } catch (error) {
                console.log(error);
            }


        }
    }
}