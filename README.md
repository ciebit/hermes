# @ciebit/hermes

Provide event-like structure for communication between objects

## Use

```typescript
import Hermes from "@ciebit/hermes";

const hermes = new Hermes;

hermes.addListener('active', (text:string) => console.log(text));
hermes.dispache('active', 'Activated');


// For a single call to pass true in the third parameter
hermes.addListener('unique', () => console.log('Unique'), true)
```
