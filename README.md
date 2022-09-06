# Lambda Layer CDK Construct for Node.js Runtimes

Dependencies included in layer

```json
{
  "pg": "latest",
  "typeorm": "latest",
  "typeorm-aurora-data-api-driver": "latest",
  "reflect-metadata": "latest"
}
```


### Usage
This example is using [ServerlessStack](https://sst.dev/) but the construct can be used in vanilla aws-cdk as well.
```typescript
export function LambdaLayersStack({ stack, app }: StackContext) {
  const typeormLayer = new NodePostgresLayer(stack, 'TypeORMLayer');

  return { typeormLayer };
}
```
---

Based on https://github.com/jetbridge/lambda-layer-typeorm-pg
