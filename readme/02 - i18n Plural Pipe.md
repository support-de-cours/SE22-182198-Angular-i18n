# i18n Plural Pipe

## Préparation du projet

Fichier `app.component.html`

```html
<div>{{ messages.length | i18nPlural: messageMapping }}</div>
```

Fichier `app.component.ts`

```ts
messages: any[] = ['ee', 'eee'];

messageMapping: {[k: string]: string} = {
  '=0': 'No messages.', 
  '=1': 'One message.', 
  'other': '# messages.'
};
```
