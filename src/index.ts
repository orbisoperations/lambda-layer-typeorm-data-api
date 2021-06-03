import { AssetCode, LayerVersion, Runtime } from "@aws-cdk/aws-lambda";

import { Construct } from "@aws-cdk/core";

export class NodePostgresLayer extends LayerVersion {
  constructor(scope: Construct, id: string = "NodePostgresLayer") {
    super(scope, id, {
      code: new AssetCode(__dirname + "/nodejs.zip"),
      compatibleRuntimes: [Runtime.NODEJS_10_X, Runtime.NODEJS_12_X],
      license: "MIT",
      description: "Pg/typeorm lambda layer for Nodejs",
    });
  }
}

export default NodePostgresLayer;
