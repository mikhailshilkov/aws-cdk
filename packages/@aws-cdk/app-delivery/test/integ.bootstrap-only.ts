import { App, Stack } from '@aws-cdk/cdk';
import { BootstrapPipeline } from '../bootstrap-app/pipeline';

const app = new App();

const stack = new Stack(app, 'integ-app-delivery-bootstrap-only');

new BootstrapPipeline(stack, 'pipeline', {
  source: 'https://github.com/aws-samples/aws-cdk-intro-workshop',
  oauthSecret: 'arn:aws:secretsmanager:us-east-1:585695036304:secret:github-token-B5IVBl',
  workdir: 'code/typescript',
  branch: 'pipeline',
  stacks: [ 'WorkshopPipeline' ]
});
