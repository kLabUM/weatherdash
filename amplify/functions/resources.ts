import { CfnOutput, Stack, StackProps, Duration } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as path from 'path';

export class ScrapeForecastLambdaStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    // Define the Lambda function
    const ScrapeForecastFunction = new lambda.Function(this, 'ScrapeForecastFunction', {
      runtime: lambda.Runtime.PYTHON_3_9, // Specify the runtime
      handler: 'index.handler',           // Specify the handler function
      code: lambda.Code.fromAsset('./amplify/functions/scrapeforecast'),
      functionName: 'ScrapeForecast',
      description: 'Scrapes weather sentry forecast',
      timeout: Duration.seconds(30),
      memorySize: 128,
      environment: {
        TEST: 'test',
      },
    });

    // Output the Lambda function ARN
    new CfnOutput(this, 'HellowWorldFunctionArn', {
      value: ScrapeForecastFunction.functionArn,
      exportName: 'ScrapeForecastFunctionArn',
    });
  }
}