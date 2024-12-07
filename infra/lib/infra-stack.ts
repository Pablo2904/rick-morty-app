import * as cdk from "aws-cdk-lib";
import { Stack, StackProps } from "aws-cdk-lib";
import { Construct } from "constructs";
import * as s3 from "aws-cdk-lib/aws-s3";
import * as cloudfront from "aws-cdk-lib/aws-cloudfront";
import * as origins from "aws-cdk-lib/aws-cloudfront-origins";
interface InfraStackProps extends StackProps {
  environment: string; // "production" | "staging"
}
export class InfraStack extends Stack {
  constructor(scope: Construct, id: string, props?: InfraStackProps) {
    super(scope, id, props);

    const environment = props?.environment || "staging"; // Domyślnie "staging"
    const bucketName = `rick-morty-bucket-${environment}`; // Nazwa bucketu dla środowiska

    // Tworzenie prywatnego bucketu S3
    const bucket = new s3.Bucket(this, `ReactAppBucket`, {
      bucketName,
      websiteIndexDocument: "index.html", // Konfiguracja dla statycznej witryny
      websiteErrorDocument: "index.html",
      // blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL, // Prywatny bucket
      blockPublicAccess: s3.BlockPublicAccess.BLOCK_ACLS, // Ustawienie blokady publicznej dla ACL
      removalPolicy: cdk.RemovalPolicy.DESTROY, // Automatyczne usuwanie przy usuwaniu stacka
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
    // Konfiguracja CloudFront
    const distribution = new cloudfront.Distribution(
      this,
      `ReactAppDistribution-${environment}`,
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
      description: `CloudFront ID for ${environment} environment`,
    });
    new cdk.CfnOutput(this, `CloudFrontURL`, {
      value: distribution.distributionDomainName,
      description: `CloudFront URL for ${environment} environment`,
    });

    // Wyjście: Nazwa bucketu S3
    new cdk.CfnOutput(this, `BucketName`, {
      value: bucket.bucketName,
      description: `Bucket name for ${environment} environment`,
    });
  }
}
