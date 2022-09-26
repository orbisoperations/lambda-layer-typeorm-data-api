# Lambda Layer CDK Construct for Node.js Runtimes

Dependencies included in v1.0.14

```json
{
  "pg": "8.7.3",
  "typeorm": "0.3.7",
  "typeorm-aurora-data-api-driver": "2.4.4",
  "reflect-metadata": "0.1.13"
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
