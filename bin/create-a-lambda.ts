#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { CreateALambdaStack } from '../lib/create-a-lambda-stack';

const app = new cdk.App();
new CreateALambdaStack(app, 'CreateALambdaStack');
