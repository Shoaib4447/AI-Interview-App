const InputForm = ({ userInput, setUserInput, handleSubmit, loading }) => {
  return (
    <form
      onSubmit={handleSubmit}
      className='mx-4 sm:mx-0 w-[90%] sm:w-full max-w-3xl mt-8 flex items-center gap-4 bg-white/20 backdrop-blur-md px-4 py-3 rounded-xl absolute bottom-4 '
    >
      <input
        type='text'
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        placeholder='Type your answer...'
        className=' flex-1 bg-transparent outline-none text-white placeholder-white/70 text-base'
      />
      <button
        type='submit'
        disabled={loading}
        className='bg-white text-indigo-600 font-semibold px-5 py-2 rounded-xl hover:bg-indigo-100 transition disabled:opacity-50 sm:px-6 sm:py-2 text-sm sm:text-base'
      >
        {loading ? "...wait" : "Send"}
      </button>
    </form>
  );
};

export default InputForm;
