#!/usr/bin/env node
import "source-map-support/register";
import * as cdk from "aws-cdk-lib";
import { InfraStack } from "../lib/infra-stack";

interface ExtendedStackProps extends cdk.StackProps {
  environment: string;
}

const app = new cdk.App();
const environment = app.node.tryGetContext("environment") || "staging";

new InfraStack(app, `InfraStack-${environment}`, {
  environment,
} as ExtendedStackProps);
