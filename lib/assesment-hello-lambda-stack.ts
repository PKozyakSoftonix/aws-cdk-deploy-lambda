import * as cdk from 'aws-cdk-lib';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import { Construct } from 'constructs';
import * as apigateway from 'aws-cdk-lib/aws-apigateway';

export class MyCdkProjectStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const helloWorldFunction = new lambda.Function(this, 'HelloWorldFunction', {
      runtime: lambda.Runtime.NODEJS_18_X,
      handler: 'hello-world-handler.handler',
      code: lambda.Code.fromAsset('lambda'),
    });

    const api = new apigateway.RestApi(this, 'HelloWorldAPI');

    const integration = new apigateway.LambdaIntegration(helloWorldFunction);
    api.root.addMethod('GET', integration);
  }
}
