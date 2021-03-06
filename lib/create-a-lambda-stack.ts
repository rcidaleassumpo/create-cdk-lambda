import * as cdk from "@aws-cdk/core";
import * as lambda from "@aws-cdk/aws-lambda-nodejs";

export class CreateALambdaStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here
    new lambda.NodejsFunction(this as any, "helloWorld", {
      functionName: "log-hello-world",
      entry: "lib/log-hello-world.ts",
      bundling: {
        minify: true,
      },
    });
  }
}
