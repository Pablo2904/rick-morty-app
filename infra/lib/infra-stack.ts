import * as cdk from "aws-cdk-lib";
import { Stack, StackProps } from "aws-cdk-lib";
import { Construct } from "constructs";
import * as s3 from "aws-cdk-lib/aws-s3";
import * as cloudfront from "aws-cdk-lib/aws-cloudfront";
import * as origins from "aws-cdk-lib/aws-cloudfront-origins";

export class InfraStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    // Parametr environment
    const environment = new cdk.CfnParameter(this, "environment", {
      type: "String",
      description: "Environment for the stack (e.g., production, staging)",
      allowedValues: ["production", "staging"], // Lista dopuszczalnych wartości
      default: "staging",
    });

    const bucketName = `rick-morty-bucket-${environment.valueAsString}`; // Dynamiczna nazwa bucketu

    // Tworzenie prywatnego bucketu S3
    const bucket = new s3.Bucket(this, `ReactAppBucket`, {
      bucketName,
      websiteIndexDocument: "index.html", // Konfiguracja dla statycznej witryny
      websiteErrorDocument: "index.html",
      blockPublicAccess: s3.BlockPublicAccess.BLOCK_ACLS,
      removalPolicy: cdk.RemovalPolicy.DESTROY,
      publicReadAccess: true,
    });

    const originAccessIdentity = new cloudfront.OriginAccessIdentity(
      this,
      "ReactAppOAI",
      {
        comment: "Access for CloudFront to S3 bucket",
      }
    );
    bucket.grantRead(originAccessIdentity);

    const distribution = new cloudfront.Distribution(
      this,
      `ReactAppDistribution`,
      {
        defaultBehavior: {
          origin: new origins.S3Origin(bucket, {
            originAccessIdentity,
          }),
          cachePolicy: cloudfront.CachePolicy.CACHING_OPTIMIZED, // Standardowa polityka cache
          viewerProtocolPolicy:
            cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS, // Wymuszenie HTTPS
        },
        errorResponses: [
          {
            httpStatus: 403,
            responseHttpStatus: 200,
            responsePagePath: "/index.html",
            ttl: cdk.Duration.seconds(0),
          },
          {
            httpStatus: 404,
            responseHttpStatus: 200,
            responsePagePath: "/index.html",
            ttl: cdk.Duration.seconds(0),
          },
        ],
      }
    );

    new cdk.CfnOutput(this, `CloudFrontID`, {
      value: distribution.distributionId,
      description: `CloudFront ID for ${environment.valueAsString} environment`,
    });
    new cdk.CfnOutput(this, `CloudFrontURL`, {
      value: distribution.distributionDomainName,
      description: `CloudFront URL for ${environment.valueAsString} environment`,
    });
  }
}
