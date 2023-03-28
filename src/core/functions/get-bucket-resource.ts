import { APP } from '../constants';

const getBucketResource = (bucketPath: string) => `${APP.aws.assets}${bucketPath}`;

export default getBucketResource;
