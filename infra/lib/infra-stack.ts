import * as cdk from "aws-cdk-lib";
import { Stack, StackProps } from "aws-cdk-lib";
import { Construct } from "constructs";
import * as s3 from "aws-cdk-lib/aws-s3";
import * as cloudfront from "aws-cdk-lib/aws-cloudfront";
import * as origins from "aws-cdk-lib/aws-cloudfront-origins";

export class InfraStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    // Nazwa brancha dla unikalnych zasobów
    const branchName = process.env.BRANCH_NAME || "default";

    // Tworzenie bucketu S3
    const bucket = new s3.Bucket(this, `ReactAppBucket-${branchName}`, {
      websiteIndexDocument: "index.html",
      websiteErrorDocument: "index.html",
      blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL, // Bezpieczne ustawienia
    });

    // Tworzenie dystrybucji CloudFront
    const distribution = new cloudfront.Distribution(
      this,
      `ReactAppDistribution-${branchName}`,
      {
        defaultBehavior: {
          origin: new origins.S3Origin(bucket), // Bucket jako źródło
          cachePolicy: cloudfront.CachePolicy.CACHING_OPTIMIZED,
        },
      }
    );

    // Wyjście URL dystrybucji
    new cdk.CfnOutput(this, `CloudFrontURL-${branchName}`, {
      value: distribution.distributionDomainName,
      description: `CloudFront URL for branch: ${branchName}`,
    });

    new cdk.CfnOutput(this, `BucketName-${branchName}`, {
      value: bucket.bucketName,
      description: `S3 Bucket Name for branch: ${branchName}`,
      exportName: `BucketName-${branchName.replace(/\./g, "-")}`, // Zamień kropki na myślniki
    });
  }
}
