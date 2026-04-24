import { useForm, useFieldArray } from "react-hook-form";

function ContactForm() {
  const { control, register, handleSubmit } = useForm({
    defaultValues: {
      contacts: [{ value: "" }]
    }
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: "contacts"
  });

  return (
    <form onSubmit={handleSubmit(data => console.log(data))}>
      {fields.map((field, index) => (
        <div key={field.id}>
          <input {...register(`contacts.${index}.value`)} />
          <button type="button" onClick={() => remove(index)}>Удалить</button>
        </div>
      ))}
      <button type="button" onClick={() => append({ value: "" })}>Добавить контакт</button>
      <button type="submit">Отправить</button>
    </form>
  );
}