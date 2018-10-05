Form component
```jsx
<Form 
    formValues={{name: 'my name', email: 'test@test.com'}} 
    onSubmit={(val) => console.log(val)}
    onReset={() => console.log("Form reseted")}
    validate={{
      name: /[a-zA-Z]+/g,
      email: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    }}
  >
    {(form) => (
      <div>
        <InputText 
          type="text" 
          label="Default text" 
          errorMessage="Enter valid name"
          {...form.fields.name} 
        />
        <InputText 
          type="text" 
          label="Error text" 
          errorMessage="Enter valid email address" 
          {...form.fields.email}
        />
        <Button type="submit" format="primary" disabled={!form.isChanged || !form.isValid} >Submit</Button>
        <Button type="reset">Reset</Button>
      </div>
    )}
  </Form>
```