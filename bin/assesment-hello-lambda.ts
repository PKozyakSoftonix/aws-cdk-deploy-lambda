#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { MyCdkProjectStack } from '../lib/assesment-hello-lambda-stack';

const app = new cdk.App();
new MyCdkProjectStack(app, 'MyCdkProjectStack');
