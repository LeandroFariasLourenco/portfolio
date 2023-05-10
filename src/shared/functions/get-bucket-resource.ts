import { APP } from "../constants/app";

const getBucketResource = (bucketPath: string): string => `${APP.aws.assets}${bucketPath}`;

export default getBucketResource;
