const InputForm = ({ userInput, setUserInput, handleSubmit, loading }) => {
  return (
    <form
      onSubmit={handleSubmit}
      className='w-full max-w-3xl mt-8 flex items-center gap-4 bg-white/20 backdrop-blur-md px-4 sm:px-6 py-3 rounded-xl'
    >
      <input
        type='text'
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        placeholder='Type your answer...'
        className='flex-1 bg-transparent outline-none text-white placeholder-white/70 text-base'
      />
      <button
        type='submit'
        disabled={loading}
        className='bg-white text-indigo-600 font-semibold px-5 py-2 rounded-xl hover:bg-indigo-100 transition disabled:opacity-50'
      >
        {loading ? "..." : "Send"}
      </button>
    </form>
  );
};

export default InputForm;
