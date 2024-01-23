export default function CreateTodo() {
  return (
    <form className="mt-6 sm:flex mx-auto py-12 sm:max-w-md lg:mt-0">
      <label htmlFor="add-todo" className="sr-only">
        Add Todo
      </label>
      <input
        type="text"
        name="add-todo"
        id="add-todo"
        autoComplete="name"
        required
        className="input-todolist transition-300"
        placeholder="Create New Todo"
      />
      <div className="flex flex-row-reverse py-4 sm:py-0 justify-center mx-1 gap-1">
        <button
          type="submit"
          className="transition-300 btn-add-todo "
        >
          Add Todo!
        </button>
        <button
          className="transition-300 btn-cancel"
        >
          Cancel
        </button>
      </div>
    </form>
  )
}
