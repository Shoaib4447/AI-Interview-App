const ChatBox = ({ response }) => {
  if (!response) return null;

  return (
    <div className='mt-8 w-full max-w-3xl p-6 rounded-xl bg-white/20 backdrop-blur-md shadow-lg text-white'>
      <p className='whitespace-pre-line text-base sm:text-lg leading-relaxed'>
        {response}
      </p>
    </div>
  );
};

export default ChatBox;
