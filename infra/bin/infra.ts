#!/usr/bin/env node
import "source-map-support/register";
import * as cdk from "aws-cdk-lib";
import { InfraStack } from "../lib/infra-stack";
const app = new cdk.App();
const environment = app.node.tryGetContext("environment") || "staging"; // Domyślnie "staging"

new InfraStack(app, `InfraStack-${environment}`, {
  environment,
});
