Input Components
```jsx
  <InputText 
    type="text" 
    label="Default text" 
    name="default" 
    value="Default input" 
    onChange={() => false} 
  />
  <InputText 
    type="text" 
    label="Error text" 
    name="success" 
    value="Success input" 
    format="success" 
    onChange={() => false} 
  />
  <InputText
    type="text" 
    label="Success text" 
    name="error" 
    errorMessage="Some error message" 
    value="error input" 
    format="error" 
    onChange={() => false} 
  />
```