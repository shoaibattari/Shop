import imageUrlBuilder from "@sanity/image-url";

import { client } from "../../sanity/lib/client";

const imagebuilder = imageUrlBuilder(client);

export const  urlFoImage = (source: string) => {
  return imagebuilder?.image(source);
}
