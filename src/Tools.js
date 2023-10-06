import brokenImage from "./no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector (1).jpg";

export const validateImage = (path, image) => {
    return image == undefined ? brokenImage : path + image;

}