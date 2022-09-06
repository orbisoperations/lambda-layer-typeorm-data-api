import {
  AssetCode,
  LayerVersion,
  LayerVersionProps,
  Runtime,
} from "aws-cdk-lib/aws-lambda";
import { Construct } from "constructs";

export class NodePostgresLayer extends LayerVersion {
  constructor(
      scope: Construct,
      id: string = "NodePostgresLayer",
      props?: Partial<LayerVersionProps>
  ) {
    super(scope, id, {
      ...props,
      code: new AssetCode(__dirname + "/nodejs.zip"),
      compatibleRuntimes: [Runtime.NODEJS_10_X, Runtime.NODEJS_12_X, Runtime.NODEJS_16_X],
      license: "MIT",
      description: "Pg/typeorm lambda layer for Nodejs",
    });
  }
}