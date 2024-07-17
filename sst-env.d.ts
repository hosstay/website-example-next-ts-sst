/* tslint:disable */
/* eslint-disable */
import "sst"
declare module "sst" {
  export interface Resource {
    Api: {
      name: string
      type: "sst.aws.Function"
      url: string
    }
    // Database: {
    //   name: string
    //   type: "sst.aws.Dynamo"
    // }
    Frontend: {
      type: "sst.aws.Nextjs"
      url: string
    }
  }
}
export {}