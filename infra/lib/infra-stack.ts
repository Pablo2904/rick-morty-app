import * as cdk from "aws-cdk-lib";
import { Stack, StackProps } from "aws-cdk-lib";
import { Construct } from "constructs";
import * as s3 from "aws-cdk-lib/aws-s3";
import * as cloudfront from "aws-cdk-lib/aws-cloudfront";
import * as s3deploy from "aws-cdk-lib/aws-s3-deployment";

export class InfraStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    // Pobierz nazwę brancha z zmiennej środowiskowej lub ustaw domyślną wartość
    const branchName = process.env.BRANCH_NAME || "default";
    const uniqueId = cdk.Names.uniqueId(this);

    // S3 Bucket for hosting the app
    const bucket = new s3.Bucket(
      this,
      `ReactAppBucket-${branchName}-${uniqueId}`,
      {
        websiteIndexDocument: "index.html",
        websiteErrorDocument: "index.html",
        publicReadAccess: true,
      }
    );

    // CloudFront distribution
    const distribution = new cloudfront.CloudFrontWebDistribution(
      this,
      `ReactAppDistribution-${branchName}-${uniqueId}`,
      {
        originConfigs: [
          {
            s3OriginSource: {
              s3BucketSource: bucket,
            },
            behaviors: [{ isDefaultBehavior: true }],
          },
        ],
      }
    );

    // Deploy React build files to S3
    new s3deploy.BucketDeployment(
      this,
      `ReactAppDeployment-${branchName}-${uniqueId}`,
      {
        sources: [s3deploy.Source.asset("../rick-morty-app-client/build")],
        destinationBucket: bucket,
        distribution,
        distributionPaths: ["/*"], // Invalidate CloudFront cache
      }
    );

    // Output CloudFront URL
    new cdk.CfnOutput(this, `CloudFrontURL-${branchName}-${uniqueId}`, {
      value: distribution.distributionDomainName,
      description: `CloudFront URL for branch: ${branchName}`,
    });
  }
}
